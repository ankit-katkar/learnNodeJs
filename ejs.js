const express = require('express');
const path = require('path');

let app = express();
const publicPath = path.join(__dirname, 'views');
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.sendFile('Welcome to the Home Page!');
});

app.get('/home',(req, resp)=>{
    resp.render(`home`)
})

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});