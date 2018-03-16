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

exports.addInformation = async function(StudentData) {
    let collection = db.collection(ConfigSet.COLLECTION_NAME);
    let result = await collection.insertOne({
            name: StudentData.name,
            sex: StudentData.sex,
            class: StudentData.class,
            FirstExcept: StudentData.FirstExcept,
            SeconfExcept: StudentData.SeconfExcept,
            AdjustedOrNot: StudentData.AdjustedOrNot,
            SelfIntroduction: StudentData.SelfIntroduction,
        });
    return result.ops[0];
};




