import express from "express";
import multer from "multer";
import { submitForm } from "../controllers/Add_Product.js";
import { addUserAPI } from "../controllers/register.js";
import { checkLoginAPI } from "../controllers/login.js";
import { getUserData } from "../controllers/getUserData.js";
import { getAllProductsAPI } from "../controllers/getAllProducts.js";

const router=express.Router();


router.get('/products',getAllProductsAPI)

// Set up the multer middleware to handle file uploads
const upload = multer({ dest: 'uploads/' });
router.post('/form',upload.single('photo'),submitForm)
router.post('/user/register',addUserAPI)
router.post('/user/login',checkLoginAPI)
router.post('/user',getUserData)
export default router