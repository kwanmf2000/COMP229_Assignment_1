var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */

router.get('/', indexController.home); //call the fuction "home" in controller and got to page "home"

router.get('/aboutme', indexController.about);

router.get('/projects', indexController.project);

router.get('/services', indexController.service);

router.get('/contacts', indexController.contact);

router.post('/contact', (req, res) => {
    // enable redirect to home page when submit
    const { firstName, lastName, contactNumber, email, message } = req.body;
    res.redirect('/home');
  });

module.exports = router;
