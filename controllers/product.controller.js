const Product = require('../models/product.model');

const addProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json({ data: product });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product
            .findByIdAndUpdate(id
                , req.body);

        if (!product) {
            return res.status(404).json({ message: "Product not found!" });
        }

        const updatedProduct = await Product
            .findById(id);
        res.status(200).json(updatedProduct);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found!" });
        }

        res.status(200).json({ message: "Product deleted successfully!" });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}


module.exports = {
    addProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
};