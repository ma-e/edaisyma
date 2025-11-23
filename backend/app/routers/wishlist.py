from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from app.db import get_session
from app.models import WishlistItem
from app.schemas import WishlistItemCreate, WishlistItemRead

router = APIRouter()

# -------------------------
# Create a wishlist item
# -------------------------
@router.post("/", response_model=WishlistItemRead)
async def create_wishlist_item(
    item: WishlistItemCreate,
    session: AsyncSession = Depends(get_session)
):
    new_item = WishlistItem(
        name=item.name,
        image_url=item.image_url,
        price=item.price,
        size=item.size,
        color=item.color
    )
    session.add(new_item)
    await session.commit()
    await session.refresh(new_item)
    return new_item

# -------------------------
# Get all wishlist items
# -------------------------
@router.get("/", response_model=list[WishlistItemRead])
async def get_wishlist_items(session: AsyncSession = Depends(get_session)):
    result = await session.execute(select(WishlistItem))
    return result.scalars().all()


# DELETE Item by ID
@router.delete("/{item_id}")
async def delete_wishlist_item(item_id: int, session: AsyncSession = Depends(get_session)):
    result = await session.execute(select(WishlistItem).where(WishlistItem.id == item_id))
    item = result.scalar_one_or_none()

    if not item:
        raise HTTPException(status_code=404, detail="Item not found")

    await session.delete(item)
    await session.commit()

    return {"message": "Item deleted successfully", "id": item_id}
