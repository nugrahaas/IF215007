import { mysql } from "mysql";

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'newsletter-for-botyol'
});

function writeUserData(name, email) {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO users (name, email) VALUES ('" + name + "', '" + email + "')";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });                   
}