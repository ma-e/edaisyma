from fastapi import FastAPI
from app.routers import users
from app.models import Base  # <- Import Base from models.py
from app.db import engine

app = FastAPI(title="FastAPI Backend Example")

@app.on_event("startup")
async def startup():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

app.include_router(users.router, prefix="/users", tags=["Users"])
