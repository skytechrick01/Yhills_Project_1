const express = require("express");
const mysql = require("mysql2");
const app = express();

function Post_Login(req, res) {
    const data = req.body;
    const Mobile = data.Mobile;
    const Password = data.Password;
    let P = 1;
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'SKY TECH - RICK',
        database: 'sky_tech_rick',
        waitForConnections: true,
        connectionLimit: 10000,
        queueLimit: 0
    });
    const query = `Select * from user_data;`;
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query: ' + err.stack);
            res.status(500).send('Internal Server Error');
            return;
        }
        for (let i = 0; i < results.length; i++) {
            const element = results[i];
            let a = element.Mobile;
            if (a==Mobile) {
                P = 2;
                if(element.Create_Password == Password){
                    res.status(200).redirect("/successfully_Login");
                }
                else {
                    res.status(200).send("Wrong Password");
                }
                break;
            }
            P = 1;
        }
        if(P == 1){
            res.status(200).send("User not found you can create account instead at: 127.0.0.1:5555/signup");
        }
    })
    connection.end();
}
module.exports = Post_Login;