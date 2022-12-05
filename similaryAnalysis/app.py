# Using flask to make an api
# import necessary libraries and functions
from flask import Flask, jsonify, request, json
from flask_cors import CORS, cross_origin
from matchingPinning import MatchingPinning

# creating a Flask app
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/')
def hello_geek():
    return '<h1>Hello from Flask & Docker1</h2>'


@app.route('/mandp', methods = ['POST'])
@cross_origin()
def mandp():
    print('POST Called')
    model = MatchingPinning()
    print('1')
    searchText = json.loads(request.data)
    print('2')
    print(searchText)

    returnData= model.makePrediction(searchText)
    ##returnSentiments.append({"s": searchText, "sentiment": sentiment})
    
    return returnData


if __name__ == "__main__":
    
    app.run(debug=True)