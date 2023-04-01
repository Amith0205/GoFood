const mongoose = require('mongoose');
const mongoDB=async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/GoFood',{useNewUrlParser:true},async(err,result)=>{
        if(!err){
            console.log("DB connected");
            const fetchedData=await mongoose.connection.db.collection("food_items");
            fetchedData.find({}).toArray(async(err,data)=>{
                const categories=await mongoose.connection.db.collection("food_category");
                categories.find({}).toArray((err,catdata)=>{
                    if(!err){
                        global.food_items=data; 
                        global.food_category=catdata;
                        // console.log(catdata);
                    }
                })
                // if(!err){
                //     // console.log(data);
                //     global.food_items=data;
                // }
            })

        }
        
    });    
}
module.exports=mongoDB;