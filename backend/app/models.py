from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class Comment(Base):
    __tablename__ = "comments"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    comment = Column(String, unique=True, index=True, nullable=False)

class Blog(Base):
    __tablename__ = "blogs"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    comment = Column(String, unique=True, index=True, nullable=False)

class WishlistItem(Base):
    __tablename__ = "wishlist"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    image_url = Column(String, nullable=False)
    price = Column(Float, nullable=False)
    size = Column(String, nullable=False)
    color = Column(String, nullable=False)