from flask import Flask
import pandas as pd
import openpyxl as op

# Use your own directory for your sheet.
new_df = pd.read_excel("C:\\Users\\Jacky chen\\Documents\\GitHub\\ClassMarks\\Marks Spreadsheet\\Marks.xlsx", sheet_name=0)
mark_num = new_df.loc[0, "Current Mark"]
new_wb = pd.ExcelFile("C:\\Users\\Jacky chen\\Documents\\GitHub\\ClassMarks\\Marks Spreadsheet\\Marks.xlsx")
name_of_class = new_wb.sheet_names[0]

app = Flask(__name__)

@app.route("/classMarks")
def classMarks():
    return {"classMarks": [mark_num*100]}

@app.route("/className")
def className():
    return {"className":[name_of_class]}

if __name__ == '__main__':
    app.run(debug=True)