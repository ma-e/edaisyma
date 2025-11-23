from pydantic import BaseModel

class CommentCreate(BaseModel):
    name: str
    comment: str

class CommentRead(BaseModel):
    id: int
    name: str
    comment: str

    class Config:
        orm_mode = True

# -------------------------
# WishlistItem Schemas
# -------------------------
class WishlistItemCreate(BaseModel):
    name: str
    image_url: str
    price: float
    size: str
    color: str

class WishlistItemRead(BaseModel):
    id: int
    name: str
    image_url: str
    price: float
    size: str
    color: str

    class Config:
        orm_mode = True