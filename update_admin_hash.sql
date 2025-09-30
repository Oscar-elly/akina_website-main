-- Update the admin password hash to a valid bcrypt hash for password 'admin'

UPDATE admins
SET password_hash = '$2b$10$2Nq4FthpHmXB/nfaWzhweeiuqyw8gpawSPauCVt5jbQKdkjCfkWkm'
WHERE email = 'admin@example.com';
