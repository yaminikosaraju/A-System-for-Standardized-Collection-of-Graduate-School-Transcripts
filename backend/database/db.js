const mysql = require('mysql');

// First you need to create a connection to the database
// Be sure to replace 'user' and 'password' with the correct values
const con = mysql.createConnection({
  host: 'sql9.freemysqlhosting.net',
  user: 'sql9385558',
  password: '',
  database: 'sql9385558',
});

const  con1 = mysql.createConnection({
  host: 'mydb.cjul7vkbil6x.ca-central-1.rds.amazonaws.com',
  user: 'munadmin',
  password: '',
  database: ''

})

con.connect((err) =>{
  if(err){
      console.log(err)
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

//con.end((err) => {
  // The connection is terminated gracefully
  // Ensures all remaining queries are executed
  // Then sends a quit packet to the MySQL server.
//});

module.exports = con;