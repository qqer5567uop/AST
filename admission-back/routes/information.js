let express = require('express');
let informationDB = require('../models/information_db');
let router = express.Router();
let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false });
let fs = require('fs');
let ConfigSet = require('../configs/config_set.json');

router.post('/', urlencodedParser, async function (req, res, next) {
	// 创建时间类型，用于检测是否超时
	let endDate = new Date();
	endDate.setFullYear(ConfigSet.END_YEAR, ConfigSet.END_MONTH-1, ConfigSet.END_DAY);
	let today = new Date();

	// 获取req.body传来的信息，暂存在StudentData中
	let StudentData = {
		name: req.body.name,
		uid: req.body.uid,
		sex: req.body.sex,
		class: req.body.class,
		phone: req.body.phone,
		FirstExcept: req.body.FirstExcept,
		SecondExcept: req.body.SecondExcept,
		AdjustedOrNot: req.body.AdjustedOrNot,
		SelfIntroduction: req.body.SelfIntroduction,
	}

	// 函数验证StudentData是否符合规范，不符合则返回400（请求错误） 
	if (!_validateStudentData(StudentData)) {
		res.status(200).json({ "msg": "Data Error" })
	} else {
		let collection = await informationDB.getCollection();
		// 验证数据库中是否存在同姓名的数据，如果不存在这新建，否则检测学号是否相同
		collection.findOne({ name: StudentData.name }, function (err, data) {
			if (!data) {
				collection.insertOne({
					name: StudentData.name,
					uid: StudentData.uid,
					sex: StudentData.sex,
					class: StudentData.class,
					phone: StudentData.phone,
					FirstExcept: StudentData.FirstExcept,
					SecondExcept: StudentData.SecondExcept,
					AdjustedOrNot: StudentData.AdjustedOrNot,
					SelfIntroduction: StudentData.SelfIntroduction,
				}, function () {
					res.status(200).json({ "msg": "Set Success" })
				})
			}
			else {
				//console.log(data);
				// 如果学号相同，则修改数据，否则认为是姓名或学号输入错误，出现重复
				if (req.body.uid === data.uid) {
					// 如果现在的时间小于截止时间，则修改数据，否者返回错误
					if (today <= endDate) {
						collection.save({
							"_id": data._id,
							"name": StudentData.name,
							"uid": StudentData.uid,
							"sex": StudentData.sex,
							"class": StudentData.class,
							"phone": StudentData.phone,
							"FirstExcept": StudentData.FirstExcept,
							"SecondExcept": StudentData.SecondExcept,
							"AdjustedOrNot": StudentData.AdjustedOrNot,
							"SelfIntroduction": StudentData.SelfIntroduction,
						}, function () {
							res.status(200).json({ "msg": "Change Success" });
						})
					}
					else {
						res.status(200).json({ "msg": "Time Error" });
					}
				}
				else {
					res.status(200).json({ "msg": "Change Fail" })
				}
			}
		})
	}
});
// 验证StudentData是否格式合法，具有必须字段
function _validateStudentData(StudentData) {
	let uid = /^U(\d{9})$/
	let sex = /^[\u7537\u5973]$/
	let phone = /^1(\d{10})$/

	if (StudentData.name === undefined || StudentData.name == "")
		return false;
	if (StudentData.uid === undefined || !uid.test(StudentData.uid))
		return false;
	if (StudentData.sex === undefined || !sex.test(StudentData.sex))
		return false;
	if (StudentData.class === undefined || StudentData.class == "")
		return false;
	if (StudentData.phone === undefined || !phone.test(StudentData.phone))
		return false;
	if (StudentData.FirstExcept === undefined || StudentData.FirstExcept == "")
		return false;
	if (StudentData.AdjustedOrNot === undefined || StudentData.AdjustedOrNot == "")
		return false;
	if ((StudentData.SelfIntroduction === undefined || StudentData.SelfIntroduction == "") || ((StudentData.SelfIntroduction).length > 300))
		return false;
	return true;
}

module.exports = router;
