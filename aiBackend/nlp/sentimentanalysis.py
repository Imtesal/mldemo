
#!pip3 install torch==1.8.1+cu111 torchvision==0.9.1+cu111 torchaudio==0.8.1 -f https://download.pytorch.org/whl/torch_stable.html

#!pip install transformers requests pandas numpy beautifulsoup4
#curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
#source "$HOME/.cargo/env"

class SentimentAnalysis():
    def __init__(self) -> None:
        pass

    def makePrediction(self, reviewText):
        from transformers import AutoTokenizer, AutoModelForSequenceClassification
        import torch
        #import numpy as np
        #import pandas as pd
        #from bs4 import BeautifulSoup

        print('Start')
        print(reviewText)

        tokenizer = AutoTokenizer.from_pretrained('nlptown/bert-base-multilingual-uncased-sentiment')
        model = AutoModelForSequenceClassification.from_pretrained('nlptown/bert-base-multilingual-uncased-sentiment')

        tokens = tokenizer.encode(reviewText, return_tensors='pt')
        result = model(tokens)
        sentiment =int(torch.argmax(result.logits))+1
        sentimentText=""
        if sentiment == 1:
            sentimentText = "Worst"
        elif sentiment == 2:
            sentimentText = "Bad"
        elif sentiment == 3:
            sentimentText = "Neutral"
        elif sentiment == 4:
            sentimentText = "Good"
        elif sentiment == 5:
            sentimentText = "Excellent"
        return sentimentText

