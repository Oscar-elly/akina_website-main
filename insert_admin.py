import pyodbc
import bcrypt
import getpass

# Database connection details
SERVER = r'DESKTOP-0FRFNEU\MSAS16MSA16'
DATABASE = 'akina_db'
DRIVER = 'ODBC Driver 18 for SQL Server'

def get_connection():
    conn_str = f"""
        DRIVER={{{DRIVER}}};
        SERVER={SERVER};
        DATABASE={DATABASE};
        Trusted_Connection=yes;
        TrustServerCertificate=yes;
        Mars_Connection=yes;
    """
    return pyodbc.connect(conn_str)

def insert_admin(email, password):
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

    conn = get_connection()
    cursor = conn.cursor()

    try:
        cursor.execute("INSERT INTO admins (email, password_hash) VALUES (?, ?)", (email, hashed_password))
        conn.commit()
        print(f"Admin user '{email}' inserted successfully.")
    except Exception as e:
        print(f"Error inserting admin user: {e}")
    finally:
        cursor.close()
        conn.close()

if __name__ == "__main__":
    email = input("Enter admin email: ")
    password = getpass.getpass("Enter admin password: ")
    insert_admin(email, password)
