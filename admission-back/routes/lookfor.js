let express = require('express');
let informationDB = require('../models/information_db');
let router = express.Router();
let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false });
let fs = require('fs');

router.post('/', urlencodedParser, async function (req, res, next) {
	let collection = await informationDB.getCollection();
	if (!_validateStudentData(req.body)) {
		res.status(400).send("Empty");
	} else {
		collection.findOne({ name: req.body.name }, function (err, data) {
			if (!data) {
				res.status(400).send("Not found");
			} else {
				if (data.uid == req.body.uid && data.phone == req.body.phone) {
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
					res.status(400).send("Not matched")
				}
			}
		})
	}
})

function _validateStudentData(StudentData) {
	if (StudentData.name === undefined)
		return false;
	if (StudentData.uid === undefined)
		return false;
	if (StudentData.phone === undefined)
		return false;
	return true;
}

module.exports = router;
