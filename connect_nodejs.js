const { MongoClient } = require('mongodb');

const dbUrl = "mongodb://localhost:27017";
const database = 'local';

const client = new MongoClient(dbUrl);

async function dbConnect() {
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('local_data');
}

// Export the function
module.exports = dbConnect;
