require("dotenv").config();
const connectDB = require("./db/connect");
const product = require("./models/product");

const Product = require("./models/product")

const ProductJson = require("./product.json")
const start = async()=>{
    try{
        await connectDB(process.env.MONGODB_URI)
        await product.deleteMany();
        await Product.create(ProductJson);
        console.log("success");
    }catch(error){
        console.log(error)
    }
};
start();