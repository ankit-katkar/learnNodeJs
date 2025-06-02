const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'learn_nodejs'
});

connection.connect((err)=>{
  if(err){
    console.warn('connection is not connect'); 
  }else{
    console.warn('connection is connected successfully');
  }
});

module.exports = connection
