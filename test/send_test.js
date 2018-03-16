let should = require('should');
let assert = require('assert');
let request = require('supertest');

describe('InformationSend API', function() {
    let url = 'http://localhost:3000';
    
    before(function(done) {
        done();
    });    

    describe('InformationSend API', function() {
        it('Should post information success', function(done){
            let StudentData = {
                    "name": "刘羿",
                    "sex": "男",
                    "class": "电信1705",
                    "phone": "13036154308",
                    "FirstExcept": "科协技术部",
                    "SeconfExcept": "科协赛事部",
                    "AdjustedOrNot": 0,
                    "SelfIntroduction": "balabalabala"
                }
                    
            
            request(url)
                .post('/InformationSend')
                .send(StudentData)
                .expect(200) //Status code
                .end(function(err,res) {
                    if (err) {
                        throw err;
                    }
                    console.log("success res==>",res.body);
                    // Should.js fluent syntax applied
                    done();
                });
        });
        it('Should post information fail', function(done){
            let StudentData = {
                "name": "刘羿",
                "sex": "男",
                "class": "电信1705",
                "FirstExcept": "科协技术部",
                "SelfIntroduction": "balabalabala"
            }
            
            request(url)
                .post('/InformationSend')
                .send(StudentData)
                .expect(400) //Status code
                .end(function(err,res) {
                    if (err) {
                        throw err;
                    }
                    console.log("success res==>",res.body);
                    // Should.js fluent syntax applied
                    done();
                });
        });

    });
});