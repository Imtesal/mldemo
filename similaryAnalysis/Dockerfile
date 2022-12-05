FROM huggingface/transformers-cpu

WORKDIR /usr/src/app

COPY requirements.txt ./

ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8

RUN pip install --no-cache-dir --upgrade pip \
  && pip install --no-cache-dir -r requirements.txt

COPY . .

#CMD ["python3", "./similarityAnalysis.py"]

CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]