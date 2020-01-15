const { Router } = require('express');
const AthletesController = require('./controllers/AhtletesController');
const CoachesController = require('./controllers/CoachesController');
const ExercisesController = require('./controllers/ExercisesController');
const SearchCoachController = require('./controllers/SearchCoachController');

const routes = Router();

// routes.get('/test', AthletesController.store);

routes.post('/athletes', AthletesController.store);
routes.get('/athletes', AthletesController.index);

routes.post("/coaches", CoachesController.store);
routes.get("/coaches", CoachesController.index);
routes.get("/coaches/update", CoachesController.update); //not working

routes.post('/exercises', ExercisesController.store);
routes.get('/exercises', ExercisesController.index);

routes.get('/coaches/search', SearchCoachController.index);

module.exports = routes;
