import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brand-interview-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand.interview-calendar.component.html',
  styleUrls: ['./auth.shared.scss'],
})
export class BrandInterviewCalendarComponent implements OnInit {
  @Output() dateSelected = new EventEmitter<string>();

  selectedDate: string | null = null;
  selectedTime: string | null = null;
  minDate: string = '';
  confirmed: boolean = false;

  times = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM'
  ];

  ngOnInit(): void {
    // Set minimum date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.minDate = tomorrow.toISOString().split('T')[0];
  }

  onDateChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.selectedDate = target.value;
    this.selectedTime = null; // Reset time when date changes
  }

  chooseTime(time: string): void {
    this.selectedTime = time;
  }

  confirmSelection(): void {
    if (!this.selectedDate || !this.selectedTime) return;

    // Convert 12-hour time to 24-hour for ISO format
    const time24 = this.convertTo24Hour(this.selectedTime);
    const iso = `${this.selectedDate}T${time24}:00`;

    this.confirmed = true;
    this.dateSelected.emit(iso);
  }

  private convertTo24Hour(time12: string): string {
    const [time, period] = time12.split(' ');
    let [hours, minutes] = time.split(':');

    if (period === 'PM' && hours !== '12') {
      hours = String(parseInt(hours) + 12);
    } else if (period === 'AM' && hours === '12') {
      hours = '00';
    }

    return `${hours.padStart(2, '0')}:${minutes}`;
  }
}

