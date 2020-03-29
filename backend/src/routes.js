const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index); /* LIST */
routes.post('/ongs', OngController.create); /* CADASTRO */

routes.get('/profile', ProfileController.index);  /* LIST */

routes.get('/incidents', IncidentController.index);  /* LIST */
routes.post('/incidents', IncidentController.create); /* CADASTRO */
routes.delete('/incidents/:id', IncidentController.delete); /* DELETE */

module.exports = routes;