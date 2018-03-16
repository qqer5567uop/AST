let express = require('express');
//let informationDB = require('../models/information_db');
let router = express.Router();
let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({extended: false});
let fs = require('fs');

router.post('/', urlencodedParser, function (req, res, next) {
    // 获取req.body传来的信息，暂存在StudentData中
    let StudentData = {
            name: req.body.name,
            sex: req.body.sex,
            class: req.body.class,
            phone: req.body.phone,
            FirstExcept: req.body.FirstExcept,
            SeconfExcept: req.body.SeconfExcept,
            AdjustedOrNot: req.body.AdjustedOrNot,
            SelfIntroduction: req.body.SelfIntroduction,
        }
    console.log(StudentData);

    console.log(_validateStudentData(StudentData));
    // 函数验证StudentData是否符合规范，不符合则返回400（请求错误）
    if (!_validateStudentData(StudentData)) {
        res.sendStatus(400);
    } else { //将数据导入数据库
        //let data = informationDB.addInformation(StudentData);
        //data.information_id = data._id;
        //delete data._id;
        //return {result: data};
        console.log(StudentData);
        res.status(200).json(StudentData);
    }
});
// 验证StudentData是否格式合法，具有必须字段
function _validateStudentData(StudentData) {
    if (StudentData.name === undefined)
        return false;
    if (StudentData.sex === undefined)
        return false;
    if (StudentData.class === undefined)
        return false;
    if (StudentData.phone === undefined)
        return false;
    if (StudentData.FirstExcept === undefined)
        return false;
    if (StudentData.SeconfExcept === undefined)
        return false;
    if (StudentData.AdjustedOrNot === undefined)
        return false;
    if ((StudentData.SelfIntroduction === undefined)||((StudentData.SelfIntroduction).length>300))
        return false;
    return true;
}

module.exports = router;