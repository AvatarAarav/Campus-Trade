import express from "express";
import { getAllProductsAPI } from "../controllers/apiFunctions.js";
const router=express.Router();
router.get('/products',getAllProductsAPI)

export default router