from fastapi import APIRouter, Depends
from ..database import get_db
from ..schemas import ParticipantCreate
from ..auth import get_current_user

router = APIRouter()

@router.post("/")
def create_participant(participant: ParticipantCreate, cursor = Depends(get_db), current_user = Depends(get_current_user)):
    cursor.execute("""
        INSERT INTO program_participants (id, name, age, program_type, location, status, enrolled_at)
        VALUES (NEWID(), ?, ?, ?, ?, ?, GETDATE())
    """, (participant.name, participant.age, participant.program_type, participant.location, participant.status))
    cursor.commit()
    return {"message": "Participant created"}

@router.get("/")
def get_participants(cursor = Depends(get_db), current_user = Depends(get_current_user)):
    cursor.execute("SELECT id, name, age, program_type, location, status, enrolled_at FROM program_participants")
    rows = cursor.fetchall()
    participants = [dict(zip([column[0] for column in cursor.description], row)) for row in rows]
    return participants
