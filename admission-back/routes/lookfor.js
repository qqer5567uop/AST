let express = require('express');
let informationDB = require('../models/information_db');
let router = express.Router();
let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false });

/*  查询学生报名数据  */
router.post('/', urlencodedParser, async function (req, res, next) {
	let collection = await informationDB.getCollection();

	// 检测数据是否符合
	if (!_validateStudentData(req.body)) {
		res.status(400).json({ "msg": "Empty" })
	} else {
		// 依据学号查询是否有数据
		collection.findOne({ uid: req.body.uidnph.substr(0, 10) }, function (err, data) {
			if (!data) {
				res.status(400).json({ "msg": "Not found" })
			} else {
				// 验证身份信息是否匹配
				if (data.phone.substr(-4) === req.body.uidnph.substr(-4)) {
					res.status(200).json({
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
					res.status(400).json({ "msg": "Not matched" })
				}
			}
		})
	}
})

function _validateStudentData(StudentData) {
	if (StudentData.uidnph === undefined || StudentData.uidnph == "")
		return false;
	return true;
}

module.exports = router;
