from datetime import datetime

from fastapi import APIRouter, Depends, HTTPException, status
from jose import JWTError, jwt
from sqlalchemy.orm import Session

from . import models, schemas
from .auth import oauth2_scheme, SECRET_KEY, ALGORITHM, get_db

router = APIRouter()


def get_current_brand(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)) -> models.User:
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id: str = payload.get("sub")
        role: str = payload.get("role")
        if user_id is None or role != "brand":
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Not authenticated as brand")
    except JWTError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")

    user = db.query(models.User).get(int(user_id))
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Brand not found")
    return user


@router.post("/interview", response_model=schemas.InterviewResponse)
def schedule_interview(payload: schemas.InterviewCreateRequest,
                       current_brand: models.User = Depends(get_current_brand),
                       db: Session = Depends(get_db)):
    # preferred_date is already a datetime from the client
    interview = models.BrandInterview(
        brand_id=current_brand.id,
        scheduled_date=payload.preferred_date,
        status="Scheduled",
    )
    db.add(interview)
    db.commit()
    db.refresh(interview)
    return interview
