# ticker-tape/src/ticker_tape/forms/build_form_.py
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, TextAreaField
from wtforms.validators import DataRequired


class DashboardForm(FlaskForm):
    title = StringField("Dashboard Title", validators=[DataRequired()])
    description = TextAreaField('Description')
    code = TextAreaField('Code')
    submit = SubmitField("Submit")