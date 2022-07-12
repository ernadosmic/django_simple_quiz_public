import csv
from javna_uprava.models import Question, Choice


def run():
    questions = Question.objects.all()
    choices = Choice.objects.all()
    choices.delete()
    questions.delete()
    with open('javna_uprava/questions.csv', encoding='utf-8') as csvfile:
        rows = csv.reader(csvfile, delimiter=';')
        next(rows)
        for i, row in enumerate(rows, start=1):
            question = row[1]
            correct = row[8]

            question_item = Question.objects.create(
                question_text=question, correct_choice=correct, question_num=i)

            question_item.save()

            choice_1 = Choice.objects.create(
                choice_text=row[2], question_id=question_item,
                correct_choice=True if int(correct) == 1 else False)
            choice_2 = Choice.objects.create(
                choice_text=row[3], question_id=question_item,
                correct_choice=True if int(correct) == 2 else False)
            choice_3 = Choice.objects.create(
                choice_text=row[4], question_id=question_item,
                correct_choice=True if int(correct) == 3 else False)
            choice_4 = Choice.objects.create(
                choice_text=row[5], question_id=question_item,
                correct_choice=True if int(correct) == 4 else False)
            choice_5 = Choice.objects.create(
                choice_text=row[6], question_id=question_item,
                correct_choice=True if int(correct) == 5 else False)
            choice_6 = Choice.objects.create(
                choice_text=row[7], question_id=question_item,
                correct_choice=True if int(correct) == 6 else False)

            question_item.save()
            choice_1.save()
            choice_2.save()
            choice_3.save()
            choice_4.save()
            choice_5.save()
            choice_6.save()
