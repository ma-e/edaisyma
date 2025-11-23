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
