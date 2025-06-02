const dbConnect = require('./connect_nodejs')

const deleteData = async ()=>{
 const db = await dbConnect();
 const result = await db.deleteOne({name:'demo two'});
 if(result.acknowledged){
    console.warn(result);
 }
}

deleteData();