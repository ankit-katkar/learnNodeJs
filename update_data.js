const dbConnect = require('./connect_nodejs')

const update = async ()=>{
 const db = await dbConnect();
 const result = await db.updateOne({name:'demo two'}, {$set:{role:'HOD'}})
 console.warn(result);
}

update();