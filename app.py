from flask import Flask
import pymongo
from pymongo import MongoClient
import json
from bson import json_util

app = Flask(__name__)

cluster = MongoClient("mongodb+srv://USERNAME:PASSWORD@cluster0.ou3yi.mongodb.net/california_lakes?retryWrites=true&w=majority")
db = cluster["california_lakes"]
collection_lake_oroville = db["lake_oroville"]
collection_lake_shasta = db["lake_shasta"]

#Test
@app.route('/')
def test():
    return "App is working perfectly"

@app.route("/lake_oroville", methods=['GET'])
def lake_oroville():
    all_lake_oroville = list(collection_lake_oroville.find({}))
    return json.dumps(all_lake_oroville, default=json_util.default)

@app.route("/lake_shasta", methods=['GET'])
def get_all_lake_shasta():
    all_lake_shasta = list(collection_lake_shasta.find({}))
    return json.dumps(all_lake_shasta, default=json_util.default)

if __name__ == '__main__':
    app.run(debug=True)
