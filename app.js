require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect")
const PORT = process.env.PORT || 5000;

const product_route = require("./routes/product")

app.get("/",(req,res)=>{
    res.send("HI, I am Live");
});

// middleware or set router

app.use("/api/products",product_route)

const start = async()=>{
    try{
        await connectDB(process.env.MONGODB_URI);
        app.listen(PORT,()=>{
            console.log(`connected to port no. ${PORT}`);
        });
    }catch(error){
        console.log(error)
    }
}

start();