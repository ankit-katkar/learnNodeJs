const express = require('express');
const path = require('path');

let app = express();
const publicPath = path.join(__dirname, 'views');
app.set('view engine', 'ejs')

const reqFilter = (req, resp, next)=>{
    const age = Number(req.query.age)
    if(!age){
        resp.send('Please provide your age')
    }else if (age < 18){
        resp.send('You are not aligible to access this page')
    }else{
        next();
    }
}

app.get('', reqFilter,(req, res) => {
    res.render('home');
});

app.get('/about',(req, resp)=>{
    resp.render(`about`)
}) 

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});