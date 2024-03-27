var express = require('express');
var router = express.Router();

const controller = require('../controllers/controller');

router.get('/tutors', controller.getAllTutors)
router.get('/tutors', controller.getOneTutor)
router.post('/tutors', controller.createTutor);
router.put('/tutors', controller.updateTutor);
router.delete('/tutors', controller.deleteTutor);

module.exports = router;
