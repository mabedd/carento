import mongoose from 'mongoose'
import {config} from 'dotenv'

const connectDB = async () =>
{
    
    try {
        config();
        const conn = await mongoose.connect(process.env.MONGO_URI,{
         useUnifiedTopology:true,
         useCreateIndex:true,
         useNewUrlParser:true   
        })
        console.log(`mongoDB connected: ${conn.connection.host}`);
    }catch(error){
        console.error(error.message);
        process.exit(1)
    }
}
export default connectDB