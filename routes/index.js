var express = require('express');
var router = express.Router();
const controller = require('../controllers/controller');

router.get('/', function(req, res) {
    res.send('Hello World').status(200);
});

router.get('/animals', controller.getAllAnimals)
router.get('/animals', controller.getOneAnimal)
router.post('/animals', controller.createAnimal);
router.put('/animals', controller.updateAnimal);
router.delete('/animals', controller.deleteAnimal);

router.get('/tutors', controller.getAllTutors)
router.get('/tutors', controller.getOneTutor)
router.post('/tutors', controller.createTutor);
router.put('/tutors', controller.updateTutor);
router.delete('/tutors', controller.deleteTutor);

module.exports = router