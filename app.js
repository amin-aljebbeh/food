// load our app server using express somehow....
const mysql = require('mysql')

var express = require('express')
var bodyParser = require('body-parser')
var async = require('async');

var app = express()

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
    // connection configurations
var dbConn = mysql.createConnection({
    multipleStatements: true,
    host: "bsnfzusmwtkaex6igzct-mysql.services.clever-cloud.com",
    user: "uqmifjlrydloih6s",
    password: "D9PTJwAn59gm8FGwLJWk",
    database: "bsnfzusmwtkaex6igzct"
});
// connect to database
dbConn.connect();
console.log("connected");

var ingred = [];
var steps = [];


// Retrieve all Categories 
app.get('/categories', function(req, res) {
    console.log("Fetching Categories");
    dbConn.query('SELECT * FROM categories', function(error, results, fields) {
        if (error) throw error;
        var responsee = res.send(results);
        // results = new Map(JSON.parse(res.send(results)));

        //return new Map(JSON.parse(results));
        return responsee;
    });
});


// Retrieve Meal Information by id 
app.get('/category/:id', function(req, res) {
    let user_id = req.params.id;
    if (!user_id) {
        return res.status(400).send({ error: true, message: 'Please provide Meal_Id' });
    }
    dbConn.query('SELECT * FROM meals INNER JOIN category_meal_relation ON meals.id = category_meal_relation.meal_id WHERE category_meal_relation.category_id =?', user_id, function(error, results, fields) {
        if (error) throw error;
        return res.send(results);
    });
});


// Retrieve Meal Information by id 
app.get('/meal/:id', function(req, res) {
    let user_id = req.params.id;
    if (!user_id) {
        return res.status(400).send({ error: true, message: 'Please provide Meal_Id' });
    } else {
        dbConn.query('SELECT ingredients FROM meals_ingredients WHERE meal_id =?', [user_id], function(error, results) {
            if (error) throw error;
            var ingreds = results.map((row) => {
                return Object.values(row);
            });
            ingred = [].concat.apply([], ingreds);

        });
        dbConn.query('SELECT steps FROM meals_steps WHERE meal_id =?', [user_id], function(error, results2) {
            if (error) throw error;
            var stepss = results2.map((row) => {
                return Object.values(row);
            });
            steps = [].concat.apply([], stepss);
            return res.send({ ingredients: ingred, steps: steps })
        });
    }
});


app.listen(port, () => {
    console.log("sucsessfuly server started ")
})
