const Product = require('../models/product');   //import product model



module.exports.products = async function(req,res){  //for showing list of products

   const myproducts = await Product.find({});   //search for products in db

   if(!myproducts || myproducts.length<1){ //if products not found of length of products array 0 send res 
    res.status(404).send("Products not found");
   }else{                                  //if products found send them
    res.status(200).send(myproducts);
   }
      
}

module.exports.create = async function(req,res){    //to create a new product

    try{
    // console.log(req.body);

    if(!req.body.name || !req.body.quantity){   //if name or quantity fields doesn't match send res
        return res.status(400).send("Both 'name' and 'quantity' are required fields.");
    }

  
    let newProduct = await Product.create({     //create new product
        name: req.body.name,
        quantity: req.body.quantity
    });

    return res.status(200).send("Product added successfully");

   }catch(err){     //if error 
    console.log(`Error in adding product: ${err}`);
   }
}

module.exports.delete = async function(req,res){    //handle delete request

    try{

        const productId = req.params.id;    //get product id
 
        const myproduct = await Product.findById({_id:productId});  //find product by id

        if(!myproduct){                             //if not found send res
            res.status(404).send("product not found");
        }else{                                          //if found delete one by id
            await Product.deleteOne({
                _id : productId
            })

            res.status(200).send("Product deleted successfully");
        }

    }catch(err){                //catch error if any
        if(err){
            console.log(`${err}`);
        }
    }  
}


module.exports.update = async function(req,res){       //handle update request

    console.log(req.query.number);

    try{
        const productId = req.params.id;        //get product id
 
        const myproduct = await Product.findById({_id:productId});  //find product by id

        if(!myproduct){                         //if not found send res
        
            res.status(404).send("Product not found");

         }else{                               //if found update the quantity

        const newquantity = parseInt(myproduct.quantity) + parseInt(req.query.number);//convert strings into number


            // Note - To increment the quantity of the product put number as a positive value in the query 
            //        and to decrement the quantity put the number as negative value in the query

        await Product.findByIdAndUpdate({       //find one by id and update its quantity
            _id : req.params.id,
        }, {
            quantity: newquantity
        });

        res.status(200).send("Updated successfully");

    }

    }catch(err){            //catch err if any
        if(err){
            console.log(`${err}`);
        }
    }
}