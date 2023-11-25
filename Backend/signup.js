const express = require("express");
const app = express();
const mysql = require('mysql2');

function Signup(req, res){
    const data = req.body;
    const Name = data.Name;
    const Mobile = data.Mobile;
    const Email = data.Email;
    const Create_Password = data.Create_Password;
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'SKY TECH - RICK',
        database: 'sky_tech_rick',
        waitForConnections: true,
        connectionLimit: 10000,
        queueLimit: 0
    });
    connection.connect((err) => {
        if (err) {
          console.error('Error connecting to MySQL: ' + err.stack);
          return;
        }
        console.log('Connected to MySQL as id ' + connection.threadId);
    });
    process.on('SIGINT', () => {
        connection.end();
        process.exit();
    });
    if (!Name || !Email || !Mobile || !Create_Password) {
      return res.status(400).json({ error: 'Username and email are required.' });
    }
    const query = `Insert into user_data (Name, Email, Mobile, Create_Password) values(?,?,?,?)`;
    connection.query(query, [Name, Email, Mobile, Create_Password], (err, results) => {
        if (err) {
            console.error('Error executing insert query: ' + err.stack);
            res.status(200).send('Already a user or Please enter correct details');
        return;
        }
        res.status(200).render("Signup", {VIS:"T"})
    });
    connection.end();
}
module.exports = Signup;