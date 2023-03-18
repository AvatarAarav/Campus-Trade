import express from "express";
import multer from "multer";
import { submitForm } from "../controllers/submitForm.js";
import { addUserAPI } from "../controllers/register.js";
import { checkLoginAPI } from "../controllers/login.js";
import { getAllProductsAPI } from "../controllers/apiFunctions.js";

const router=express.Router();


router.get('/products',getAllProductsAPI)

// Set up the multer middleware to handle file uploads
const upload = multer({ dest: 'uploads/' });
router.post('/form',upload.single('photo'),submitForm)
router.post('/user/register',addUserAPI)
router.post('/user/login',checkLoginAPI)
export default router