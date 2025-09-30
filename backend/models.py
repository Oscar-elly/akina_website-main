# Models commented out as we switched to raw SQL with pyodbc
# from sqlalchemy import Column, Integer, String, DateTime, Boolean, Float, Text
# from sqlalchemy.dialects.mssql import UNIQUEIDENTIFIER
# from database import Base
# import datetime

# class Admin(Base):
#     __tablename__ = "admins"
#     id = Column(UNIQUEIDENTIFIER, primary_key=True, default="NEWID()")
#     email = Column(String(255), unique=True, nullable=False)
#     password_hash = Column(String(255), nullable=False)
#     created_at = Column(DateTime, default=datetime.datetime.utcnow)

# class Contact(Base):
#     __tablename__ = "contacts"
#     id = Column(UNIQUEIDENTIFIER, primary_key=True, default="NEWID()")
#     name = Column(String(255), nullable=False)
#     email = Column(String(255), nullable=False)
#     phone = Column(String(20))
#     message = Column(Text, nullable=False)
#     type = Column(String(50), nullable=False)
#     created_at = Column(DateTime, default=datetime.datetime.utcnow)

# class Donation(Base):
#     __tablename__ = "donations"
#     id = Column(UNIQUEIDENTIFIER, primary_key=True, default="NEWID()")
#     donor_name = Column(String(255), nullable=False)
#     donor_email = Column(String(255), nullable=False)
#     amount = Column(Float, nullable=False)
#     currency = Column(String(10), nullable=False)
#     message = Column(Text)
#     status = Column(String(20), nullable=False)
#     created_at = Column(DateTime, default=datetime.datetime.utcnow)

# class NewsletterSubscription(Base):
#     __tablename__ = "newsletters"
#     id = Column(UNIQUEIDENTIFIER, primary_key=True, default="NEWID()")
#     email = Column(String(255), nullable=False)
#     name = Column(String(255))
#     subscribed_at = Column(DateTime, default=datetime.datetime.utcnow)
#     is_active = Column(Boolean, default=True)

# class ProgramParticipant(Base):
#     __tablename__ = "program_participants"
#     id = Column(UNIQUEIDENTIFIER, primary_key=True, default="NEWID()")
#     name = Column(String(255), nullable=False)
#     age = Column(Integer, nullable=False)
#     program_type = Column(String(255), nullable=False)
#     location = Column(String(255), nullable=False)
#     status = Column(String(20), nullable=False)
#     enrolled_at = Column(DateTime, default=datetime.datetime.utcnow)
