FROM python:3.11.5
ENV env 1
WORKDIR /app
COPY requirements.txt /app/requirements.txt
RUN  pip install -r requirements.txt
COPY  . /app/
EXPOSE 8000
CMD python manage.py runserver  0.0.0.0:8000