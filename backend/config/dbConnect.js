import mongoose from "mongoose";

const dbconnect=()=> {
    if (mongoose.connection.readyState >= 1) {
        return
    }
    
    mongoose.connect(process.env.DB_URL);
}

export default dbconnect;
