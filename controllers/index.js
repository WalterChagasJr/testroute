'use strict';


var IndexModel = require('../models/index');


module.exports = function (router) {

    var model = new IndexModel();


    router.get('/', function (req, res) {

        res.render('index', model);

    });

    router.get('/add', function (req, res) {
      console.log("ROUTE /add hit");

        res.send('route /add hit');

    });

};
