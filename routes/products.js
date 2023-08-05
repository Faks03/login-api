const express = require('express');
const router = express.Router();

const {getAllProducts, createProduct, getProduct, updateProduct, deleteProduct} = require('../controllers/products');
const { uploadProductImage } = require('../controllers/uploads');


router.post('/', createProduct)
router.get('/', getAllProducts)
router.route('/uploads').post(uploadProductImage);


router.get('/product.html', (req, res) => {
    res.render('product.html');
});

router.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct);

module.exports = router;
