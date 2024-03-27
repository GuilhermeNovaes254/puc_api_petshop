const animalsService = require('../services/animals.service');
const tutorsService = require('../services/tutors.service');
const animalModel = require('../models/animal.model')

const controllers = {

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

    getAllTutors: async (req, res) => {
        const data = await tutorsService.getAllTutors(req, res);
        res.json(data).status(200);
    },

    getOneTutor: async (req, res) => {
        const data = await tutorsService.getOneTutor(req, res);
        if (Object.keys(data).length === 0) {
            res.status(404)
        } else {
            res.json(data).status(200);
        }
    },

    createTutor: async (req, res) => {
        if (animalModel.validateTutorInput(req.body)){
            tutorsService.createTutor(req, res)
        }else{
            res.json({"message":"Bad inputs"}).send(400)
        }
    },

    updateTutor: async (req, res) => {
        if (animalModel.validateTutorUpdate(req.body)){
            tutorsService.updateTutor(req, res)
        }else{
            res.json({"message":"Bad inputs"}).send(400)
        }
    },

    deleteTutor: async (req, res) => {
        tutorsService.deleteTutor(req, res)
    }
};

module.exports = controllers;