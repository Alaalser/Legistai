import pyodbc

# Azure SQL Database connection string
connection_string = (
    "Driver={ODBC Driver 18 for SQL Server};"
    "Server=tcp:legistai-test.database.windows.net,1433;"
    "Database=legistai-test;"
    "Uid=legistaitest;"
    "Pwd=admin@123;"
    "Encrypt=yes;"
    "TrustServerCertificate=no;"
)

def get_db_connection():
    """
    Establish a connection to the database.
    Returns:
        Connection object: pyodbc connection
    Raises:
        Exception: If the connection fails
    """
    try:
        conn = pyodbc.connect(connection_string)
        print('Connection established')
        return conn
    except pyodbc.Error as e:
        raise Exception(f"Database connection failed: {e}")
