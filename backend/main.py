from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import auth, contacts, donations, newsletters, participants

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite dev port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(contacts.router, prefix="/api/contacts", tags=["contacts"])
app.include_router(donations.router, prefix="/api/donations", tags=["donations"])
app.include_router(newsletters.router, prefix="/api/newsletters", tags=["newsletters"])
app.include_router(participants.router, prefix="/api/participants", tags=["participants"])
