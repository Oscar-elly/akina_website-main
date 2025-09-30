from fastapi import APIRouter, Depends
from ..database import get_db
from ..schemas import NewsletterCreate
from ..auth import get_current_user

router = APIRouter()

@router.post("/")
def create_newsletter(newsletter: NewsletterCreate, cursor = Depends(get_db)):
    cursor.execute("""
        INSERT INTO newsletters (id, email, name, subscribed_at, is_active)
        VALUES (NEWID(), ?, ?, GETDATE(), ?)
    """, (newsletter.email, newsletter.name, newsletter.is_active))
    cursor.commit()
    return {"message": "Newsletter subscription created"}

@router.get("/")
def get_newsletters(cursor = Depends(get_db), current_user = Depends(get_current_user)):
    cursor.execute("SELECT id, email, name, subscribed_at, is_active FROM newsletters")
    rows = cursor.fetchall()
    newsletters = [dict(zip([column[0] for column in cursor.description], row)) for row in rows]
    return newsletters
