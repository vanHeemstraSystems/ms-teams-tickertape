# ticker-tape/src/ticker_tape/models/dashboard_model.py
from utils.db_utils import db


class Dashboard(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=True)
    code = db.Column(db.Text, nullable=True)

    def __repr__(self):
      return f'<Dashboard {self.title}>'