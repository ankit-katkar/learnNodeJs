const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
const secretkey = 'secretkey'

app.post('/login', (req, resp) => {
    const user = {
        id: 1,
        email: 'user@gmail.com',
        password: 'user@123'
    }
    jwt.sign({ user }, secretkey, { expiresIn: '300s' }, (err, token) => {
        resp.json({ token })
    })
})

app.post('/profile', verifyToken, (req, resp)=>{
    jwt.verify(req.token, secretkey, (error, authData)=>{
        if(error){
            resp.send({result:"invalid token"})
        }else{
            resp.json({
                result:"profile accessed",
                authData
            })
        }
    })
})

function verifyToken(req, resp, next){
const bearerHeaders = req.headers['authorization'];
console.warn('bearerHeaders', bearerHeaders);

if(typeof bearerHeaders !== 'undefined'){
    const bearer = bearerHeaders.split(" ");
    const token = bearer[1];
    req.token = token;
    next();
}else{
    resp.send({
        result:'Token is not valid'
    })
}
}

app.listen(5000, () => {
    console.warn('app running on 5000 port');
})