from flask import Flask, render_template, url_for, request
# import redis
 
app = Flask(__name__)      

# connect to redis data store
#r = redis.StrictRedis(host='localhost',port=6379,db=0)

@app.route('/')
def index():
	# r.get()
	return render_template('index.html')

@app.route('/samples/accounting-degree')
def accountingDegree():
	return render_template('samples/accounting-degree.html')

@app.route('/samples/icon-color')
def iconColor():
	return render_template('samples/icon-color.html')

@app.route('/samples/job-board')
def jobBoard():
	return render_template('samples/job-board.html')

@app.route('/admin', methods=['GET', 'POST'])
def admin():
	if request.method == 'GET':
		return render_template('create-sample.html')
	elif request.method == 'POST':
		title = request.form['title']
		role = request.form['role']
		date = request.form['date']

		#r.set(title +':role',role)
		#r.set(title +':date',date)


		return render_template('created-sample.html', title=title, role=role, date=date)
 
if __name__ == '__main__':
	app.run(debug=True)