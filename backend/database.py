import pyodbc

# Constants
SERVER = r'DESKTOP-0FRFNEU\MSAS16MSA16'  
DATABASE = 'akina_db'
DRIVER = 'ODBC Driver 18 for SQL Server'

# Connection string using Windows Authentication
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

def get_db():
    conn = get_connection()
    cursor = conn.cursor()
    try:
        yield cursor
    finally:
        cursor.close()
        conn.close()
