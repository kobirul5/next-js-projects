import mongoose from "mongoose";
export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;
        connection.on('connected', ()=>{
            console.log("MongoDb connected successfully")
        })

        connection.on('error', (err)=>{
            console.log('MongoDB connection error. please make sure mongDb Is running.' + err)
        })


    } catch (error) {
        console.log("something gose to wrong", error)
    }
}