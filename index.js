const express = require ("express");
const app = express();
const  mongoose = require ("mongoose");
import Product from "./models/product.model";


app.listen (3000, () => {
    
});

app.get('/', (req, res) => {
    res.send("node API");
})

app.post('/api/product', async(req, res) => {
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

mongoose.connect("mongodb+srv://admin:vkr7LUz58CVmFA0t@cruddb.dgtlual.mongodb.net/Node-API?retryWrites=true&w=majority&appName=cruddb")
.then(() => {
    console.log("Connected to MongoDB");
}).catch(() => {
    console.log("Error connecting to MongoDB");
})