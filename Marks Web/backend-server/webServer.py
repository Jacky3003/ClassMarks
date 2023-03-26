from flask import Flask, request
import pandas as pd
import openpyxl as op

app = Flask(__name__)

@app.route("/classAmount")
def classAmount():
    return {"classAmount": ["5"]}

@app.route("/classInfo")
def classInfo():
    return {"classInfo":["CSCB36"]}

if __name__ == '__main__':
    app.run(debug=True)