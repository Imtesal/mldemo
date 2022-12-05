#pip install newspaper3k


class WebScrapper():

    def __init__(self) -> None:
        pass

    import nltk
    
    #import numpy as np # linear algebra
    #import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)
    import ssl
    try:
        _create_unverified_https_context = ssl._create_unverified_context
    except AttributeError:
        pass
    else:
        ssl._create_default_https_context = _create_unverified_https_context

    nltk.download('punkt')

    
    def makePrediction(self, url):
        from newspaper import Article
        #url ='https://mcpress.mayoclinic.org/emotional-health/building-self-esteem-is-an-important-part-of-self-care/'
        article = Article(url)
        print('1') 
        article.download()
        print('2') 
        article.parse()
        print('3') 
        article.nlp()
        print('4') 
        import json
        print(article.title)
        return article

        #print(article.title)
        #print(article.summary)
        #print(article.text)