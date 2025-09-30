from fastapi import APIRouter, Depends
from ..database import get_db
from ..schemas import DonationCreate
from ..auth import get_current_user

router = APIRouter()

@router.post("/")
def create_donation(donation: DonationCreate, cursor = Depends(get_db)):
    cursor.execute("""
        INSERT INTO donations (id, donor_name, donor_email, amount, currency, message, status, created_at)
        VALUES (NEWID(), ?, ?, ?, ?, ?, ?, GETDATE())
    """, (donation.donor_name, donation.donor_email, donation.amount, donation.currency, donation.message, donation.status))
    cursor.commit()
    return {"message": "Donation created"}

@router.get("/")
def get_donations(cursor = Depends(get_db), current_user = Depends(get_current_user)):
    cursor.execute("SELECT id, donor_name, donor_email, amount, currency, message, status, created_at FROM donations")
    rows = cursor.fetchall()
    donations = [dict(zip([column[0] for column in cursor.description], row)) for row in rows]
    return donations
