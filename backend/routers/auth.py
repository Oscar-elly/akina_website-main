from fastapi import APIRouter, Depends, HTTPException, status
from ..database import get_db
from ..schemas import AdminLogin, Token
from ..auth import verify_password, create_access_token

router = APIRouter()

@router.post("/login", response_model=Token)
def login(admin: AdminLogin, cursor = Depends(get_db)):
    cursor.execute("SELECT email, password_hash FROM admins WHERE email = ?", (admin.email,))
    row = cursor.fetchone()
    if not row or not verify_password(admin.password, row.password_hash):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    access_token = create_access_token(data={"sub": row.email})
    return {"access_token": access_token, "token_type": "bearer"}
