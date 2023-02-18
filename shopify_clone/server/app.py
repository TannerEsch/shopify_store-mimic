from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from datetime import datetime



app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:Te147637@localhost/shopify'
db = SQLAlchemy(app)
CORS(app)

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    brand = db.column(db.String(100))
    item_name = db.column(db.String(100))
    stars = db.Column(db.Integer, default=0)
    description = db.Column(db.String(100))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"Event: {self.description}"

    def __init__(self, description):
        self.description=description



@app.route("/get", methods = ['GET'])
def get_articles():
    return jsonify({"Hello": "World"})


if __name__ == "__main__":
    app.run(debug=True)