from fastapi import FastAPI
from app.routers import comments
from app.models import Base
from app.db import engine


app = FastAPI(title="FastAPI Backend Example")

@app.on_event("startup")
async def startup():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

app.include_router(comments.router, prefix="/comments", tags=["Comments"])
