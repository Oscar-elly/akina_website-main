from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None

class AdminLogin(BaseModel):
    email: str
    password: str

class AdminBase(BaseModel):
    email: str

class AdminCreate(AdminBase):
    password: str

class Admin(AdminBase):
    id: str
    created_at: datetime

    class Config:
        from_attributes = True

class ContactCreate(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    message: str
    type: str  # 'general' | 'volunteer' | 'donation' | 'partnership'

class Contact(ContactCreate):
    id: str
    created_at: datetime

    class Config:
        from_attributes = True

class DonationCreate(BaseModel):
    donor_name: str
    donor_email: str
    amount: float
    currency: str
    message: Optional[str] = None
    status: str = "pending"  # 'pending' | 'completed' | 'failed'

class Donation(DonationCreate):
    id: str
    created_at: datetime

    class Config:
        from_attributes = True

class NewsletterCreate(BaseModel):
    email: str
    name: Optional[str] = None

class Newsletter(NewsletterCreate):
    id: str
    subscribed_at: datetime
    is_active: bool = True

    class Config:
        from_attributes = True

class ParticipantCreate(BaseModel):
    name: str
    age: int
    program_type: str
    location: str
    status: str = "pending"  # 'active' | 'completed' | 'pending'

class Participant(ParticipantCreate):
    id: str
    enrolled_at: datetime

    class Config:
        from_attributes = True
