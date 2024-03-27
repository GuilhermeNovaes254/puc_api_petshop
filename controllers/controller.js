const animalsService = require('../services/animals.service');
const animalModel = require('../models/animal.model')

const controllerAnimal = {

    getAllAnimals: async (req, res) => {

        const data = await animalsService.getAllAnimals(req, res);
        res.json(data).status(200);

    },

    getOneAnimal: async (req, res) => {

        const data = await animalsService.getOneAnimal(req, res);
        if (Object.keys(data).length === 0) {
            res.status(404)
        } else {
            res.json(data).status(200);
        }
    },

    createAnimal: async (req, res) => {
        if (animalModel.validateAnimalInput(req.body)){
            animalsService.createAnimal(req, res)
        }else{
            res.json({"message":"Bad inputs"}).send(400)
        }
    },

    updateAnimal: async (req, res) => {
        if (animalModel.validateAnimalUpdate(req.body)){
            animalsService.updateAnimal(req, res)
        }else{
            res.json({"message":"Bad inputs"}).send(400)
        }

    },

    deleteAnimal: async (req, res) => {
        animalsService.deleteAnimal(req, res)
    },

    


}

module.exports = controllerAnimal