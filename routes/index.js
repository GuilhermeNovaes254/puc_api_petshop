var express = require('express');
var router = express.Router();
const controller = require('../controllers/controller');

// Middlewares
const verifyLoggedUser = require('../middlewares/verifyLogged');

router.get('/', function(req, res) {
    res.send('Hello World').status(200);
});

router.post('/login', controller.createBearerToken);

router.get('/animals', verifyLoggedUser, verifyToken, controller.getAllAnimals)
router.get('/animals', controller.getOneAnimal)
router.post('/animals', controller.createAnimal);
router.put('/animals', controller.updateAnimal);
router.delete('/animals', controller.deleteAnimal);

router.get('/tutors', controller.getAllTutors)
router.get('/tutors', controller.getOneTutor)
router.post('/tutors', controller.createTutor);
router.put('/tutors', controller.updateTutor);
router.delete('/tutors', controller.deleteTutor);


// router.get('/users', controller.getAllUsers)
// router.get('/users', controller.getOneUser)
// router.post('/users', controller.createUser);
// router.put('/users', controller.updateUser);
// router.delete('/users', controller.deleteUser);




// router.get('/store', controller.getOneStore)
// router.post('/store', controller.createStore);
// router.put('/store', controller.updateStore);

module.exports = router