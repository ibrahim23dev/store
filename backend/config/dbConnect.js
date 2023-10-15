import mongoose from "mongoose";

const dbconnect=()=> {
    if (mongoose.connection.readyState >= 1) {
        return
    }
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.DB_URL);
}

export default dbconnect;

// const mongoDBURI = 'mongodb+srv://Task:task222@cluster0.u0bl180.mongodb.net/CR';

// (async () => {
//   try {
//     await mongoose.connect(mongoDBURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Connected Successful to mogoose!');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// })();