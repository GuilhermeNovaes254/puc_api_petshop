var express = require('express');
var router = express.Router();
const controller = require('../controllers/controller');

// Get  all
router.get('/animals', controller.getAllAnimals)

// Get one
router.get('/animals', controller.getOneAnimal)

// Create
router.post('/animals', function(req, res, next) {
  res.json({"status":"OK"});
});

// Update
router.put('/animals', function(req, res, next) {
  res.json({"status":"OK"});
});

// Delete
router.delete('/animals', function(req, res, next) {  
  res.json({"status":"OK"});
});

module.exports = router