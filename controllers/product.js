const Product = require("../models/product")

const getAllProduct = async(req,res)=>{

    const {company,name ,featured,sort,select} = req.query;
    const queryObject = {};
    if(company){
        queryObject.company = company;
        console.log(queryObject);
    }
    if(name){
        queryObject.name = {$regex:name,$options:"i"};// use of regex
        // queryObject.name = name;
        console.log(queryObject);
    }
    if(featured){
        queryObject.featured = featured;
    }
    let apidata = Product.find(queryObject);
    if(sort){
        let sortFix = sort.replace(","," ");
        apidata = apidata.sort(sortFix);
    }
    if(select){
        // let selectFix = select.replace(","," ");
        let selectFix = select.split(",").join(" ");
        apidata = apidata.select(selectFix);
    }
    const Products = await apidata;
    res.status(200).json({Products});
};
const getAllProductTesting = async(req,res)=>{
    const myData = await Product.find({}).sort("-name");
    
    // const myData = await Product.find({});
    res.status(200).json(myData);
};

module.exports = {getAllProduct,getAllProductTesting};