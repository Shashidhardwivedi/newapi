const mongoose = require("mongoose");

const connectDB  = (uri)=>{
    console.log("connection Successfull")
    return mongoose.connect(uri);
};
module.exports = connectDB