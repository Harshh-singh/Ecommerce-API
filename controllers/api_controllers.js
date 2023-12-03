const Product = require('../models/product');

module.exports.products = async function(req,res){

   const myproducts = await Product.find({});

   if(!myproducts || myproducts.length<1){
    res.status(404).send("Products not found");
   }else{
    res.status(200).send(myproducts);
   }
      
}

module.exports.create = async function(req,res){

    // console.log(req.body);

    if(!req.body.name || !req.body.quantity){
        return res.status(400).send("Both 'name' and 'quantity' are required fields.");
    }

   try{
    let newProduct = await Product.create({
        name: req.body.name,
        quantity: req.body.quantity
    });

    return res.status(200).send("Product added successfully");

   }catch(err){
    console.log(`Error in adding product: ${err}`);
   }
}