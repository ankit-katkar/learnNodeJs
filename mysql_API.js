const express = require('express');
const config = require('./mysql_config');

const app = express();
app.use(express.json())

app.get('/get', (req, resp) => {
    config.query("SELECT * FROM users", (err, result) => {
        if (err) {
            resp.send("error in API");
        } else {
            resp.send(result)
        }
    })
})

app.post('/post', (req, resp) => {
    const data = req.body;
    config.query('INSERT INTO users Set ?', data, (error, result, filds) => {
        if (error) error
        resp.send(result);
    })
})

app.put('/update/:id', (req, resp) => {
    const data = [req.body.name, req.body.email, req.body.userType, req.params.id];
    config.query("UPDATE users SET name = ?, email= ?, userType = ? WHERE id = ?", data, (error, result, filds) => {
        if (error) error
        resp.send(result);
    });
})

app.delete('/delete/:id', (req, resp) => {
    config.query("DELETE FROM users WHERE id =" + req.params.id, (error, result) => {
        if (error) error
        resp.send(result);
    })
})

app.listen(5000);