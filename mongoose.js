const mongoose = require('mongoose');

const schema = async () => {
        await mongoose.connect("mongodb://localhost:27017/local");
        console.log("Connected to MongoDB");

        const localDataSchema = new mongoose.Schema({
            name: String,
            role: String,
            isMD:Boolean
        });

        const localDataModel = mongoose.model('local_data', localDataSchema, 'local_data');

        const data = new localDataModel({
            name: 'demo three',
            role: 'Employee',
            isMD: false
        });

        const result = await data.save();
        console.log("Saved document:", result);
    }

schema();
