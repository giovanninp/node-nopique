const { Router } = require('express');
const AthletesController = require('./controllers/Athletes/AhtletesController');
const CoachesController = require('./controllers/Coaches/CoachesController');
const ExercisesController = require('./controllers/Exercises/ExercisesController');
const SearchCoachController = require('./controllers/SearchCoachController');
const AddSpecCoachController = require('./controllers/AddSpecCoachController');
const TrainsController = require('./controllers/Trains/TrainsController');
const TrainSetsController = require('./controllers/TrainSetsController');
const SearcExerciseController = require('./controllers/SearchExerciseController');
const AddExerciseToSet = require('./controllers/AddExerciseToSet');
const AddSetToTrain = require('./controllers/AddSetToTrain');
const AddTrainToAthlete = require('./controllers/AddTrainToAthlete');


const routes = Router();

// routes.get('/test', AthletesController.store);
//Athletes 
routes.post('/athletes', AthletesController.store);
routes.get('/athletes', AthletesController.index);
routes.get('/athletes/update', AthletesController.update);
//Coaches
routes.post("/coaches", CoachesController.store);
routes.get("/coaches", CoachesController.index);
routes.get("/coaches/update", CoachesController.update); //not working
//Exercises
routes.post('/exercises', ExercisesController.store);
routes.get('/exercises', ExercisesController.index);
//Trains
routes.get("/trains", TrainsController.index);
routes.post("/trains", TrainsController.store);
routes.get("/trains/sets/update", AddSetToTrain.update);

//TrainSets
routes.get("/sets", TrainSetsController.index);
routes.post("/sets", TrainSetsController.store);
routes.get("/sets/update", TrainSetsController.update);

//Search Coaches
routes.get('/coaches/search', SearchCoachController.index);

//Search Exercises
routes.get('/exercises/search', SearcExerciseController.index);
routes.get('/sets/exercises/update', AddExerciseToSet.update);
//Coaches specs
routes.get("/coaches/specs/update", AddSpecCoachController.update); //not working

//AddTrainToAthlete
routes.get("/trains/train-athlete", AddTrainToAthlete.update);

module.exports = routes;
