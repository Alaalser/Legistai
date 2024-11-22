from flask import Flask
from flask_cors import CORS
from app.db import get_db_connection


# Allow all origins (for development purposes)
def create_app():
    app = Flask(__name__)
    CORS(app)
    get_db_connection()

    # Import and register blueprints
    from .routes import main_routes
    app.register_blueprint(main_routes)

    return app
