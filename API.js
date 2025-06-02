const express = require('express');
require('./config');
const localDataModel = require('./local_data_schema');
const multer = require('multer')

let app = express();
app.use(express.json());

app.post('/create', async (req, resp) => {
    let data = new localDataModel(req.body)
    let result = await data.save()
    resp.send(result);
});

app.get('/get', async (req, resp) => {
    let data = await localDataModel.find();
    resp.send(data)
});

app.put('/update/:_id', async (req, resp) => {
    let data = await localDataModel.updateOne(
        { _id: req.params._id },
        { $set: req.body }
    )
    resp.send(data)
});

app.delete('/delete/:_id', async (req, resp) => {
    let data = await localDataModel.deleteOne(req.params);
    resp.send(data)
});

app.get('/search/:key', async (req, resp) => {
    console.warn(req.params.key);
    let data = await localDataModel.find(
        {
            "$or": [
                { "name": { $regex: req.params.key } },
                { "role": { $regex: req.params.key } },
            ]
        }
    );
    resp.send(data)
})

// upload file code 
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "uploads")
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname)
        }
    })
}).single('user_file')
app.post('/upload',upload, (req, resp) => {
    resp.set('upload file');
})

app.listen(5000);