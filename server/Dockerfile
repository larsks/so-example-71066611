FROM python:3.6.5-alpine

RUN apk update && apk upgrade && apk add gcc musl-dev libc-dev libc6-compat linux-headers build-base git libffi-dev openssl-dev

COPY . .

RUN pip install -r requirements.txt

CMD ["python", "./myfile.py"]
