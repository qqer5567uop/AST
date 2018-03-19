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

//检查数据是否重复
exports._checkInformantion = async function(StudentData) {
    let collection = db.collection(ConfigSet.COLLECTION_NAME);
    var flag;
    collection.findOne({name: StudentData.name}, function(err,doc){
        console.log(doc);
        console.log("*");
        if(!doc)
        flag=false;
    flag = true;    
    });
    console.log(flag);
    return flag;
};
