const mysql = require('mysql');

// First you need to create a connection to the database
// Be sure to replace 'user' and 'password' with the correct values


const  con = mysql.createConnection({
  host: '',
  user: '',
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



module.exports = con;