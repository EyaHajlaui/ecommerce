const Product = require('../model/product');

// Create a new product




exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

    const newProduct = new Product({
      name,
      description,
      price,
      category,
      imageUrl,
    });

    await newProduct.save();
    res.status(201).json({ message: 'Product added', product: newProduct });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch products', error: err.message });
  }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch product', error: err.message });
  }
};

// Update a product
exports.updateProduct = async (req, res) => {
  try {
    // Extract fields from req.body
    const { name, description, price, category } = req.body;

    // Build updateData object
    const updateData = {
      name,
      description,
      price,
      category,
    };

    // If a new image was uploaded, update imageUrl
    if (req.file) {
      updateData.imageUrl = `/uploads/${req.file.filename}`;
    }

    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, updateData, { new: true });

    if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });

    res.status(200).json({ message: 'Product updated', product: updatedProduct });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update product', error: err.message });
  }
};


// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete product', error: err.message });
  }
};
