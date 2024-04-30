const { MongoClient, ServerApiVersion } = require("mongodb");
const CONFIG = require("../../config/config");

const client = new MongoClient(CONFIG.mongo.uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const db = client.db("househelp");
const FormCollection = db.collection("Form");
const ContactCollection = db.collection("Contact");

module.exports = { client, FormCollection, ContactCollection };
