from datetime import datetime, timedelta
from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt
from passlib.context import CryptContext
from sqlalchemy.orm import Session

from . import models, schemas

SECRET_KEY = "CHANGE_ME_SUPER_SECRET_KEY"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")

router = APIRouter()


def get_db():
    # Placeholder: you should implement actual DB session retrieval using a SessionLocal
    from .database import SessionLocal

    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password):
    return pwd_context.hash(password)


def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


@router.post("/signup/creator", response_model=schemas.UserResponse)
def signup_creator(payload: schemas.CreatorSignupRequest, db: Session = Depends(get_db)):
    existing = db.query(models.User).filter(models.User.email == payload.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")

    user = models.User(
        first_name=payload.first_name,
        last_name=payload.last_name,
        email=payload.email,
        phone=payload.phone,
        hashed_password=get_password_hash(payload.password),
        role="creator",
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


@router.post("/signup/brand", response_model=schemas.UserResponse)
def signup_brand(payload: schemas.BrandSignupRequest, db: Session = Depends(get_db)):
    existing = db.query(models.User).filter(models.User.email == payload.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")

    user = models.User(
        first_name=payload.first_name,
        last_name=payload.last_name,
        email=payload.email,
        phone=payload.phone,
        company_name=payload.company_name,
        hashed_password=get_password_hash(payload.password),
        role="brand",
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


@router.post("/login", response_model=schemas.TokenResponse)
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.email == form_data.username).first()
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Incorrect email or password")

    access_token = create_access_token({"sub": str(user.id), "role": user.role})
    return schemas.TokenResponse(access_token=access_token)
