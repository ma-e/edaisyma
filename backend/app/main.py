from fastapi import FastAPI
from app.routers import comments
from app.routers import wishlist
from app.models import Base
from app.db import engine
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="FastAPI Backend Example")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "https://www.toomae.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

app.include_router(comments.router, prefix="/comments", tags=["Comments"])
app.include_router(wishlist.router, prefix="/wishlist", tags=["wishlist"])