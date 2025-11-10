
import { app } from "./app.js";
import { connectDB } from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
    path: "./.env"
});

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`Server is running on port ${process.env.PORT}`);   
    });
})
.catch((error) => {
    console.error("Error connecting to the database", error);
})




















/*Method 1 to connect DB in the indexfile
import express from "express";
const app = express();
//always use async await beacuse it take time to connect with DB ,due to DB is in another continent
;( async () => {
//we have putted the code in trycatch because thereare the chances of error while connecting to DB
    try {
        await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
        app.on("error" , (error) => {
            console.error("Error connecting to the database", error);
            throw error;
        });
        app.listen(process.env.PORT , () => {
            console.log(`Server is running on port ${process.env.PORT}`);   
        });
        } catch (error) {
        console.error("Error connecting to the database", error);
        throw error;
    }
})();
*/