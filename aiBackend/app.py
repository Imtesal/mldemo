# Using flask to make an api
# import necessary libraries and functions
from flask import Flask, jsonify, request, json
from flask_cors import CORS, cross_origin
from nlp.topicmodelling import TopicModelling
from nlp.webScrapper import WebScrapper
from nlp.sentimentanalysis import SentimentAnalysis


# creating a Flask app
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# on the terminal type: curl http://127.0.0.1:5000/
# returns hello world when we use GET.
# returns the data that we send when we use POST.
@app.route('/', methods = ['GET'])
@cross_origin()
def home():
    print('get Called')
    model = SentimentAnalysis()
    searchText = request.args.get("s")
    print(searchText)
    returnData =model.makePrediction(searchText)
    
    return jsonify({'sentiment': returnData})

@app.route('/sentimentanalysis', methods = ['POST'])
@cross_origin()
def sentimentanalysis():
    print('POST Called')
    model = SentimentAnalysis()
    data = json.loads(request.data)
    searchTextArray = data["s"].split("@")
    print(searchTextArray)

    returnSentiments = []
    for searchText in searchTextArray:
        sentiment= model.makePrediction(searchText)
        returnSentiments.append({"s": searchText, "sentiment": sentiment})
    
    return jsonify({'results': returnSentiments})


@app.route('/topicmodelling', methods = ['POST'])
@cross_origin()
def topicModelling():
    print('POST Called')
    model = TopicModelling()
    data = json.loads(request.data)
    textArray = data["s"].split("@")
    print(textArray)

    returnData = []
    for inputText in textArray:
        topics= model.makePrediction(inputText)
        returnData.append({"s": inputText, "sentiment": topics})
    
    return jsonify({'results': returnData})


@app.route('/webscrapper', methods = ['POST'])
@cross_origin()
def webScrapper():
    print(' webScrapper POST Called')
    model = WebScrapper()
    data = json.loads(request.data)
    url = data["url"]
    print(url)

    responseJson = []
    
    article= model.makePrediction(url)
    responseJson.append({"title": article.title, "summary": article.summary, "text": article.text})
    
    return jsonify({'results': responseJson})


# driver function
if __name__ == '__main__':

	app.run(debug = True, port=1200)
