var mysql = require('mysql');
var dbConfig = require('../db_config.js')
var OnSqlError = require('../db_utils.js').OnSQLError;

var con = mysql.createConnection(dbConfig);

process.stdout.write('Connecting to database... ');
con.connect(function(err) {
    if (err) OnSqlError(con, err);
    process.stdout.write('Success\n');

    process.stdout.write('Creating \'user\' table... ');
    var sql = 'CREATE TABLE user (' +
        'Id int PRIMARY KEY NOT NULL AUTO_INCREMENT, ' +
        'FirstName varchar(255) NOT NULL, ' +
        'LastName varchar(255) NOT NULL, ' +
        'Email varchar(255) NOT NULL, ' +
        'Password char(40) NOT NULL);';

    con.query(sql, function(err, result) {
        if (err) OnSqlError(con, err);
        process.stdout.write('Success\n');

        process.stdout.write('Disconnecting... ');
        con.end(function(err) {
            if (err) OnSqlError(con, err);
            process.stdout.write('Success\n');
        });
    });
});