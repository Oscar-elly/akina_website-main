-- Create an "admins" table to store admin user credentials
CREATE TABLE IF NOT EXISTS admins (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  created_at timestamp with time zone DEFAULT now()
);

-- Insert an example admin user (replace with your own email and password hash)
-- Note: Passwords should be hashed using a secure hashing algorithm before insertion.
-- Example using bcrypt hash for password "admin123":
-- $2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36Z1Z6a1Z6a1Z6a1Z6a1Z6a

INSERT INTO admins (email, password_hash) VALUES
('admin@example.com', '$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36Z1Z6a1Z6a1Z6a1Z6a1Z6a');
 