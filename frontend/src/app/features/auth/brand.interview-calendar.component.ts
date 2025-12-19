import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brand-interview-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand.interview-calendar.component.html',
  styleUrls: ['./auth.shared.scss'],
})
export class BrandInterviewCalendarComponent {
  @Output() dateSelected = new EventEmitter<string>();

  selectedDate: string | null = null;
  selectedTime: string | null = null;

  times = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];

  onDateChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.selectedDate = target.value;
  }

  chooseTime(time: string): void {
    this.selectedTime = time;
    this.emitIfComplete();
  }

  private emitIfComplete(): void {
    if (!this.selectedDate || !this.selectedTime) return;

    const iso = `${this.selectedDate}T${this.selectedTime}:00`;
    this.dateSelected.emit(iso);
  }
}

