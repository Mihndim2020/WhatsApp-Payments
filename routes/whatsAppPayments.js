const express = require('express');
const router = express.Router();

const client_controller = require('../controllers/clientController');
const appExperience_controller = require('../controllers/appExperienceController');
const customerExperience_controller = require('../controllers/customerExperienceController');
const merchand_controller = require('../controllers/merchandController');


router.post('/client/create', client_controller.client_create_post);
router.post('/appExperience/create', appExperience_controller.app_experience_create_post);
router.post('/customerExperience/create', customerExperience_controller.customer_experience_create_post);
router.post('/merchand/create', merchand_controller.merchand_create_post);

module.exports = router;