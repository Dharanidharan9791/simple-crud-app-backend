const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const Product = require('./models/product.model');
const productRoutes = require('./routes/product.route');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));// parse application/x-www-form-urlencoded

app.use('/api/products',productRoutes);

// app.get('/', (req, res) => {
//     res.send('Hello World! from');
// });


// app.post('/api/products', async (req, res) => {
//     try {
//         const product = await Product.create(req.body);
//         res.status(200).json({ data: product });
//     }
//     catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// app.get('/api/products', async (req, res) => {
//     try {
//         const products = await Product.find({});
//         res.status(200).json(products);
//     }
//     catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });
// app.get('/api/product/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     }
//     catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });
// app.put('/api/product/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product
//             .findByIdAndUpdate(id
//                 , req.body);

//         if (!product) {
//             return res.status(404).json({ message: "Product not found!" });
//         }

//         const updatedProduct = await Product
//             .findById(id);
//         res.status(200).json(updatedProduct);
//     }
//     catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });
// app.delete('/api/product/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findByIdAndDelete(id);

//         if (!product) {
//             return res.status(404).json({ message: "Product not found!" });
//         }

//         res.status(200).json({ message: "Product deleted successfully!" });
//     }
//     catch (err) {
//         res.status(500).json({ message: err.message });
//     }

// }
// );

mongoose.connect("mongodb+srv://admin:ZP2rC9lTRVMcMYF3@backenddb.yejhe.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Connected to the database!");
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })
    })
    .catch((err) => {
        console.log("Cannot connect to the database!");
    });