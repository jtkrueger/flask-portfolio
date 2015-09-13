from flask import Flask, render_template, url_for, request
# import redis
 
app = Flask(__name__)      

# connect to redis data store
#r = redis.StrictRedis(host='localhost',port=6379,db=0)

 

@app.route('/')
def index():
	# r.get()
	return render_template('index.html')

@app.route('/samples/hay-merchant')
def hay_merchant():
	return render_template('samples/hay-merchant.html')

@app.route('/samples/nightingale')
def nightingale():
	return render_template('samples/nightingale.html')

@app.route('/samples/underbelly')
def underbelly():
	return render_template('samples/underbelly.html')

@app.route('/samples/rice')
def rice():
	return render_template('samples/rice.html')

@app.route('/samples/anvil')
def anvil():
	return render_template('samples/anvil.html')

@app.route('/samples/julep')
def julep():
	return render_template('samples/julep.html')

@app.route('/samples/pastry-war')
def pastry_war():
	return render_template('samples/pastry-war.html')

@app.route('/samples/hpc')
def hpc():
	return render_template('samples/hpc.html')

@app.route('/samples/icon-color')
def icon_color():
	return render_template('samples/icon-color.html')

@app.route('/samples/accounting-degree')
def accounting_degree():
	return render_template('samples/accounting-degree.html')

@app.route('/samples/job-board')
def job_board():
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