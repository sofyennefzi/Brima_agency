from datetime import datetime
from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base = declarative_base()


class User(Base):
    """User model for both creators and brands"""
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    role = Column(String(20), nullable=False)  # 'CREATOR' or 'BRAND'
    first_name = Column(String(100), nullable=False)
    last_name = Column(String(100), nullable=False)
    company_name = Column(String(255), nullable=True)  # Only for brands
    phone = Column(String(50), nullable=True)
    email = Column(String(255), unique=True, index=True, nullable=False)
    hashed_password = Column(String(255), nullable=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    # Relationship
    brand_interviews = relationship("BrandInterview", back_populates="brand_user")


class BrandInterview(Base):
    """Interview scheduling for brands"""
    __tablename__ = "brand_interviews"

    id = Column(Integer, primary_key=True, index=True)
    brand_user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    interview_datetime = Column(DateTime, nullable=False)
    status = Column(String(50), default="Scheduled", nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    # Relationship
    brand_user = relationship("User", back_populates="brand_interviews")

