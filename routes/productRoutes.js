import express from 'express'
import { getProducts, addProduct } from '../controllers/productController.js'

const router = express.Router();

router.get('/products', getProducts);
router.post('/addProduct',addProduct);

export default router;
