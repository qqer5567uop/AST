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

exports.addInformation = async function(StudentData,res) {
    let collection = db.collection(ConfigSet.COLLECTION_NAME);
    let result =await collection.insertOne({
        name: StudentData.name,
        sex: StudentData.sex,
        class: StudentData.class,
        phone: StudentData.phone,
        FirstExcept: StudentData.FirstExcept,
        SecondExcept: StudentData.SecondExcept,
        AdjustedOrNot: StudentData.AdjustedOrNot,
        SelfIntroduction: StudentData.SelfIntroduction,
    });
    // let result = collection.find({name: StudentData.name});
    // console.log(result.ops[0]);
    return result.ops[0]
};

exports.getCollection = function(){
    return db.collection(ConfigSet.COLLECTION_NAME);
};