from flask import Flask
import pandas as pd
import openpyxl as op

app = Flask(__name__)

@app.route("/newMembers")
def newMembers():
    return {"newMembers": ["Test", "Test 2", "Test 3"]}

if __name__ == '__main__':
    app.run(debug=True)