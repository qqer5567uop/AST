'use strict';

let ConfigSet = require('../configs/config_set.json');
let MongoDB = require('mongodb');
let MongoClient = MongoDB.MongoClient;
let ObjectID = require('mongodb').ObjectID;

let db;
MongoClient.connect(ConfigSet.DATABASE_URL, (err, client) => {
    if (err) {
        throw err;
    } else {
        db = client.db(ConfigSet.DATABASE_NAME);
    }
});

exports.getCollection = function(){
    return db.collection(ConfigSet.COLLECTION_NAME);
};
