const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload'); 

const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

// Create product with image upload
router.post('/createproduct', upload.single('image'), createProduct);

// Get all products
router.get('/getallproducts', getAllProducts);

// Get product by ID
router.get('/getproductbyid/:id', getProductById);


// Update product with image upload
router.put('/updateproduct/:id', upload.single('image'), updateProduct);


// Delete product
router.delete('/deleteproduct/:id', deleteProduct);

module.exports = router;
