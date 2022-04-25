import express from 'express';
import ProductsControllers from '../controllers/ProductsController.js'
const { getProducts } = ProductsControllers;
const router = express.Router();

router.get('/', getProducts)

export default router;