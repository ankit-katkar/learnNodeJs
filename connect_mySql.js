const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'learn_nodejs'
});

connection.connect((error)=>{
    if(error){
        console.warn('error');
    }else{
        console.warn('connected');
        
    }
})