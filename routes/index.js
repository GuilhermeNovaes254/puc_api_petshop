var express = require('express');
var router = express.Router();
const controller = require('../controllers/controller');

router.get('/animals', controller.getAllAnimals)
router.get('/animals', controller.getOneAnimal)
router.post('/animals', controller.createAnimal);
router.put('/animals', controller.updateAnimal);
router.delete('/animals', controller.deleteAnimal);

module.exports = router