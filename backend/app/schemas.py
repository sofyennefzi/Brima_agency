from datetime import datetime
from typing import Optional

from fastapi import FastAPI
from pydantic import BaseModel, EmailStr, Field

app = FastAPI(title="Brima Agency API")


@app.get("/health")
async def health_check():
    return {"status": "ok"}


class UserBase(BaseModel):
    first_name: str
    last_name: str
    phone: Optional[str] = None


class CreatorSignupRequest(UserBase):
    email: EmailStr
    password: str = Field(min_length=8)


class BrandSignupRequest(UserBase):
    company_name: str
    email: EmailStr
    password: str = Field(min_length=8)


class UserResponse(BaseModel):
    id: int
    first_name: str
    last_name: str
    email: EmailStr
    phone: Optional[str] = None
    company_name: Optional[str] = None
    role: str

    class Config:
        orm_mode = True


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class InterviewCreateRequest(BaseModel):
    preferred_date: datetime


class InterviewResponse(BaseModel):
    id: int
    brand_id: int
    scheduled_date: datetime
    status: str

    class Config:
        orm_mode = True
