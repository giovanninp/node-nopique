const {
  Router
} = require('express');

const UsersMainController = require('./controllers/Users/Main');
const ContactsMainController = require('./controllers/Contacts/Main');
const PositionsMainController = require('./controllers/Positions/Main');
const AthletesMainController = require('./controllers/Athletes/Main');
const CoachesMainController = require('./controllers/Coaches/Main');
const TrainsMainController = require('./controllers/Trains/Main');
const TrainsSetsMainController = require('./controllers/TrainSets/Main');
const ExercisesMainController = require('./controllers/Exercise/Main');
const ExercisesSearchController = require('./controllers/Exercise/Search');
const UsersSearchController = require('./controllers/Users/Search');
const UserContactController = require('./controllers/Users/UserContact');
const UserTrainsController = require('./controllers/Users/UserTrains');
const UserAthleteController = require('./controllers/Users/UserAthlete');
const UserCoachController = require('./controllers/Users/UserCoach');//Revise

const AthleteTrainsController = require('./controllers/Athletes/AthleteTrains');//Revise

const CoachTrainsController = require('./controllers/Coaches/CoachTrains');

const TrainTSetsController = require('./controllers/Trains/TrainTSets');

const TSetExercisesController = require('./controllers/TrainSets/TSetExercises');

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({
    status: "online",
    version:"noPique_0.0.1"
  });
})

//Users
routes.get('/users', UsersMainController.index);
routes.post('/users/new', UsersMainController.store);
routes.get('/user/update', UsersMainController.update);
routes.get('/user/delete', UsersMainController.delete);

//UsersSearch
routes.get('/users/search', UsersSearchController.index);

//UserContact
routes.get('/users/contact', UserContactController.index);

//UserTrains
routes.get('/user/trains', UserTrainsController.index);

//UserAthlete
routes.get('/user/athlete', UserAthleteController.index);

//UserCoach
routes.get('/user/coach', UserCoachController.index);

//Contacts
routes.get('/contacts', ContactsMainController.index);
routes.post('/contacts/new', ContactsMainController.store);
routes.get('/contact/update', ContactsMainController.update);

//Positions
routes.get('/positions', PositionsMainController.index);
routes.post('/positions/new', PositionsMainController.store);
routes.get('/position/update', PositionsMainController.update);

//Athletes
routes.get('/athletes', AthletesMainController.index);
routes.post('/athletes/new', AthletesMainController.store);
routes.get('/athlete/update', AthletesMainController.update);

//AthleteTrains
routes.get('/athlete/trains', AthleteTrainsController.index);
routes.post('/athlete/trains/new', AthleteTrainsController.store);

//Coaches
routes.get('/coaches', CoachesMainController.index);
routes.post('/coaches/new', CoachesMainController.store);
routes.get('/coach/update', CoachesMainController.update);

//CoachTrains
routes.get('/coach/trains', CoachTrainsController.index);
routes.post('/coach/trains/new', CoachTrainsController.store);
routes.get('/coach/trains/delete', CoachTrainsController.delete);

//Trains
routes.get('/trains', TrainsMainController.index);
routes.post('/trains/new', TrainsMainController.store);
routes.get('/train/update', TrainsMainController.update);

//TrainTSets
routes.get('/train/sets', TrainTSetsController.index);
routes.post('/train/sets/new', TrainTSetsController.store);

//TrainSets
routes.get('/trains_sets', TrainsSetsMainController.index);
routes.post('/trains_sets/new', TrainsSetsMainController.store);
routes.get('/train_set/update', TrainsSetsMainController.update);

//TSetExercises
routes.get('/train_set/exercises', TSetExercisesController.index);

//Exercises
routes.get('/exercises', ExercisesMainController.index);
routes.post('/exercises/new', ExercisesMainController.store);
routes.get('/exercise/update', ExercisesMainController.update);

//Exercises Search
routes.get('/exercises/search', ExercisesSearchController.index);


module.exports = routes;