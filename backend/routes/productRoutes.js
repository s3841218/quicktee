const express = require('express');
const router = express.Router();

const { getAllProducts, getProductById} = require('../controller/productControllers')

//@desc GET all products from the database
router.get('/', (getAllProducts) => {

})

//@desc GET a products by id from the database
router.get('/:id', (getProductById) => {
    
})

module.exports = router;