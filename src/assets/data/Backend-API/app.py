from flask import Flask, jsonify
from support import get_process

app = Flask(__name__)

@app.route('/process')

def capture_process():
    lst = get_process()
    print (jsonify(lst))
    return "Hello World"

app.run(port = 5000)