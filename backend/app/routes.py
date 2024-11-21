from flask import Blueprint, request, jsonify
from app.db import get_db_connection

# Create a blueprint for the routes
main_routes = Blueprint("main_routes", __name__)

@main_routes.route("/")
def home():
    return "Welcome to the LegistAI Backend API!"

# API to register a user and return a unique userID
@main_routes.route("/register", methods=["POST"])
def register():
    try:
        data = request.json
        name = data.get("name")
        location = data.get("location")
        phone_number = data.get("phone_number")
        email = data.get("email")
        description = data.get("description")
        rating = data.get("rating")

        # Validate input
        if not data.get("name"):
            return jsonify({"error": "Name is required."}), 400
        if not data.get("location"):
            return jsonify({"error": "Location is required."}), 400
        if not data.get("phone_number"):
            return jsonify({"error": "Phone number is required."}), 400
        if not data.get("email"):
            return jsonify({"error": "Email is required."}), 400
        if not data.get("description"):
            return jsonify({"error": "Description is required."}), 400
        if not data.get("rating"):
            return jsonify({"error": "Rating is required."}), 400

        # Insert user data into the database
        conn = get_db_connection()
        cursor = conn.cursor()
        query = """
            INSERT INTO Users (name, location, phone_number, email, description, rating)
            OUTPUT Inserted.ID
            VALUES (?, ?, ?, ?, ?, ?);
        """
        cursor.execute(query, (name, location, phone_number, email, description, rating))
        user_id = cursor.fetchone()[0]
        conn.commit()
        conn.close()

        return jsonify({"message": "User registered successfully", "userID": user_id}), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# API to retrieve user details by userID
@main_routes.route("/getProfileById/<int:user_id>", methods=["GET"])
def get_profile_by_id(user_id):
    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        # Query user data
        query = "SELECT * FROM Users WHERE ID = ?;"
        cursor.execute(query, (user_id,))
        row = cursor.fetchone()
        conn.close()

        if row:
            # Convert row to a dictionary using column names
            columns = [column[0] for column in cursor.description]
            user_data = dict(zip(columns, row))
            return jsonify(user_data), 200
        else:
            return jsonify({"error": "User not found"}), 404

    except Exception as e:
        return jsonify({"error": str(e)}), 500


# Test API for checking connection
@main_routes.route("/test-connection", methods=["GET"])
def test_connection():
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT @@VERSION;")
        version = cursor.fetchone()[0]
        conn.close()
        return jsonify({"message": "Connection successful", "version": version}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
