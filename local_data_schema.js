const mongoose = require('mongoose');
const localDataSchema = new mongoose.Schema({
    name: String,
    role: String,
    isMD:Boolean
});

module.exports = mongoose.model('local_data', localDataSchema, 'local_data');