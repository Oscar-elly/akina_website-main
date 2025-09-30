-- Script to insert a new admin user into the admins table
-- Replace 'new_admin_email@example.com' and 'new_password' with desired values

DECLARE @plaintext_password NVARCHAR(255) = 'new_password';
DECLARE @email NVARCHAR(255) = 'new_admin_email@example.com';

-- Hash the password using bcrypt in application code before running this script
-- Here, you need to replace the hashed password below with the bcrypt hash of your plaintext password

INSERT INTO admins (email, password_hash)
VALUES (
    @email,
    'REPLACE_WITH_BCRYPT_HASHED_PASSWORD'
);
