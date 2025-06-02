const dbConnect = require('./connect_nodejs');

const insert = async ()=>{
    const db = await dbConnect();
    const result = await db.insertOne({
        name:"demo two",
        role: "admin",
        isMD:false
    })
    if(result.acknowledged){
        console.warn(result);
    }
    
}

insert();