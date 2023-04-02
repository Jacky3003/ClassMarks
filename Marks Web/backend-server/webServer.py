from flask import Flask
import pandas as pd
import openpyxl as op

app = Flask(__name__)

@app.route("/classMarks")
def classMarks():
    return {"classMarks": ["60"]}

@app.route("/className")
def className():
    return {"className":["CSCB36"]}

if __name__ == '__main__':
    app.run(debug=True)