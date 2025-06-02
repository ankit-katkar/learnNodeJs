
// Import the dbConnect function
const dbConnect = require('./connect_nodejs');

// First method (Using .then)
// dbConnect().then((resp) => {
//     resp.find().toArray().then((ele) => {
//         console.warn(ele);
//     });
// });

// Second method (Using async/await)
const main = async () => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data);
}; 

main();
