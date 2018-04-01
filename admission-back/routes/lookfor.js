let express = require('express');
let informationDB = require('../models/information_db');
let router = express.Router();
let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false });

// 跨域header设定
router.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By",' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

/*  查询学生报名数据  */
router.post('/InformationLookfor', urlencodedParser, async function (req, res, next) {
	let collection = await informationDB.getCollection();

	// 检测数据是否符合
	if (!_validateStudentData(req.body)) {
		res.status(200).json({ "msg": "Get Data Error" })
	} else {
		// 依据学号查询是否有数据
		collection.findOne({ uid: req.body.uidnph.substr(0, 10) }, function (err, data) {
			if (!data) {
				res.status(200).json({ "msg": "Get Fail" })
			} else {
				// 验证身份信息是否匹配
				if (data.phone.substr(-4) === req.body.uidnph.substr(-4)) {
					res.status(200).json({
						msg : "Get Success",
						name: data.name,
						uid: data.uid,
						sex: data.sex,
						class: data.class,
						phone: data.phone,
						FirstExcept: data.FirstExcept,
						SecondExcept: data.SecondExcept,
						AdjustedOrNot: data.AdjustedOrNot,
						SelfIntroduction: data.SelfIntroduction,
					});
				} else {
					res.status(200).json({ "msg": "Get Fail" })
				}
			}
		})
	}
})

function _validateStudentData(StudentData) {
	let uidnph = /^U\d{9}\+\d{4}$/

	if (StudentData.uidnph === undefined || !uidnph.test(StudentData.uidnph))
		return false;
	return true;
}

module.exports = router;
