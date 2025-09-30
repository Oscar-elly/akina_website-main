from fastapi import APIRouter, Depends
from ..database import get_db
from ..schemas import ContactCreate
from ..auth import get_current_user

router = APIRouter()

@router.post("/")
def create_contact(contact: ContactCreate, cursor = Depends(get_db)):
    cursor.execute("""
        INSERT INTO contacts (id, name, email, phone, message, type, created_at)
        VALUES (NEWID(), ?, ?, ?, ?, ?, GETDATE())
    """, (contact.name, contact.email, contact.phone, contact.message, contact.type))
    cursor.commit()
    return {"message": "Contact created"}

@router.get("/")
def get_contacts(cursor = Depends(get_db), current_user = Depends(get_current_user)):
    cursor.execute("SELECT id, name, email, phone, message, type, created_at FROM contacts")
    rows = cursor.fetchall()
    contacts = [dict(zip([column[0] for column in cursor.description], row)) for row in rows]
    return contacts
