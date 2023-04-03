const Product = require("../models/product");


exports.products = async (req,res) => {
    try{
      const products = await Product.find({});
      res.json(products);
    } catch (e) {
       res.status(500).json({error: e.message}); 
    }
}

exports.create_product = async (req, res) => {
    try {
        const {title,description,price,imgUrl} = req.body;

        let newProduct = new Product({
            title,
            description,
            price,
            imgUrl,
        });
    
    
        newProduct = await newProduct.save();
    
        res.json(newProduct);   

    } catch (e) {
       res.status(500).json({error: e.message}); 
    }
}; 