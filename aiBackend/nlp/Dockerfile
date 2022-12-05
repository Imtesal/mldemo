FROM huggingface/transformers-cpu
WORKDIR /usr/src/app

COPY requirements.txt ./


RUN pip install --no-cache-dir --upgrade pip \
  && pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["python3", "./similarityAnalysis.py"]