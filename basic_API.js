const express = require('express')
const dbConnect = require('./connect_nodejs');
const { ObjectId } = require('mongodb');

const app = express();

// this is a middleware is use to get data to the post API
app.use(express.json());

// basic get API 
// app.get('/', async (req, resp)=>{
//     let data = await dbConnect();
//     data = await data.find().toArray();    
//     resp.send(data)
// })

// basic post API 
// app.post('/', async (req, resp)=>{
//     let data = await dbConnect();
//     let result = await data.insertOne(req.body);
//     resp.send(result)
// })

// basic update API 
// app.put('/:id', async (req, res) => {
//     try {
//         let data = await dbConnect();
//         let result = await data.updateOne({ _id: new ObjectId(req.params.id) },{ $set: req.body });

//         if (result.matchedCount === 0) {
//             return res.status(404).send({ message: "No document found with this ID" });
//         }
        
//         res.send(result);
//     } catch (error) {
//         res.status(500).send({ error: "Something went wrong", details: error.message });
//     }
// });

// basic delete API 
app.delete('/:id', async (req, res) => {
    try {
        let data = await dbConnect();
        let result = await data.deleteOne({ _id: new ObjectId(req.params.id) });

        if (result.matchedCount === 0) {
            return res.status(404).send({ message: "No document found with this ID" });
        }
        
        res.send(result);
    } catch (error) {
        res.status(500).send({ error: "Something went wrong", details: error.message });
    }
});

app.listen(5000)