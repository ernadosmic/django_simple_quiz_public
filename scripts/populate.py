import csv
from javna_uprava.models import Question, Choice


def run():
    with open('javna_uprava/questions.csv', encoding='utf-8') as csvfile:
        rows = csv.reader(csvfile, delimiter=';')
        next(rows)
        for row in rows:
            question = row[1]
            print(question)
