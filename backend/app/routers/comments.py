from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from app.db import get_session
from app.models import Comment
from app.schemas import CommentCreate, CommentRead

router = APIRouter()

@router.post("/", response_model=CommentRead)
async def create_comment(comment: CommentCreate, session: AsyncSession = Depends(get_session)):
    new_comment = Comment(name=comment.name, comment=comment.comment)
    session.add(new_comment)
    await session.commit()
    await session.refresh(new_comment)
    return new_comment

@router.get("/", response_model=list[CommentRead])
async def get_comments(session: AsyncSession = Depends(get_session)):
    result = await session.execute(select(Comment))
    return result.scalars().all()
