from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from app.db import get_session
from app.models import User
from app.schemas import UserCreate, UserRead

router = APIRouter()

@router.post("/", response_model=UserRead)
async def create_user(user: UserCreate, session: AsyncSession = Depends(get_session)):
    new_user = User(name=user.name, email=user.email)
    session.add(new_user)
    await session.commit()
    await session.refresh(new_user)
    return new_user

@router.get("/", response_model=list[UserRead])
async def get_users(session: AsyncSession = Depends(get_session)):
    result = await session.execute(select(User))
    return result.scalars().all()
