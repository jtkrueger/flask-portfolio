from wtforms import Form, BooleanField, TextField, TextAreaField, SubmitField, PasswordField, validators, ValidationError
from wtforms.validators import DataRequired, Email
 
class ContactForm(Form):
	name = TextField("name", [
		validators.DataRequired(message='Please enter your name')])
	email = TextField("email", [
		validators.DataRequired(message='Please enter your email'), 
		validators.Email(message='Not a valid email')
	])
	message = TextAreaField("point", [
		validators.DataRequired(message='Please enter your message')])