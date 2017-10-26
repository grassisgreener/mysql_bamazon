var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''
});

connection.connect();

connection.query('SELECT * FROM products', function(error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});

user_input();
connection.end();

function user_input() {
    inquirer.prompt([{
            type: "input",
            message: "Please provide the ID of the product you would like to buy",
            name: "user_id"
        },
        {
            type: "input",
            message: "How many units would you like to buy?",
            name: "user_units"
        }
    ]).then(function(answers) {
        console.log(answers.user_id + answers.user_units)
        // Use user feedback for... whatever!!
    });
}