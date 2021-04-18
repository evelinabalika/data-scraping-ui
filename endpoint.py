import requests
from flask import Flask, jsonify, request
from support import get_os
from flask_cors import CORS

app = Flask(__name__)
# CORS(app)
# cors = CORS(app, resource={
#     r"/*":{
#         "origins":"*"
#     }
# })



@app.route('/process')

def capture_process():
    lst = get_os()
    return jsonify(lst)


@app.route('/add_to_db', methods=['POST'])

def add_to_db():
    request_data = request.get_json()
    if len(request_data) > 3:
        return('Please select no more than 3 proceses')
    else:
        #connect to another api endpoint
        response = requests.post('http://127.0.0.1:4000/check_processes', json = request_data)
        print(response.json())
        return jsonify(response.json())


app.run(port = 5000)