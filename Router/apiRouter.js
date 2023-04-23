import express from "express";   
import multer from "multer"; //module to handle file submission
import { submitForm } from "../controllers/Add_Product.js";
import { addUserAPI } from "../controllers/register.js";
import { checkLoginAPI } from "../controllers/login.js";
import { getUserData } from "../controllers/getUserData.js";
import { getAllProductsAPI } from "../controllers/getAllProducts.js";
import { getAdFormAPI } from "../controllers/getAdForm.js";
import { getProductAPI } from "../controllers/getProduct.js";
import { getAdImageAPI } from "../controllers/getAdImage.js";
import { getUserCardsAPI } from "../controllers/getUserCards.js";
import { getUserPage } from "../controllers/getUserPage.js";
import { getSearchResultAPI} from "../controllers/getSearchResult.js"
import {getUpdateAdAPI} from "../controllers/getUpdateAd.js"
import {updateFormAPI} from "../controllers/Update_form.js"
import { delProductAPI } from "../controllers/deleteAd.js";
import { buyProductApi } from "../controllers/buyProductApi.js";
import {ProfileUpdateAPI} from "../controllers/ProfileUpdate.js";
import {ChangeProfileAPI} from "../controllers/ChangeProfile.js";
const router=express.Router();


router.get('/products',getAllProductsAPI)

// Set up the multer middleware to handle file uploads
const upload = multer({ dest: 'uploads/' });

router.get('/ad/:id/email/:eid',getProductAPI)
router.get('/ad/buy/:id/uid/:uid',buyProductApi)
router.get('/ad/:id/mail/:eid',delProductAPI)
router.post('/form',upload.single('photo'),submitForm)
router.post('/update_form/:id/update/:email',upload.single('photo'),updateFormAPI)
router.post('/user/register',addUserAPI)
router.post('/user/login',checkLoginAPI)
router.post('/user',getUserData)
router.get('/user/:email',getUserCardsAPI)
router.post('/user/adCreate',getAdFormAPI)
router.get('/adImage/:id',getAdImageAPI)
router.get('/search_result',getSearchResultAPI)
router.get('/user/ad_update/:email/mail/:id',getUpdateAdAPI)
router.post('/user/UpdateProfile',ProfileUpdateAPI)
router.post('/user/changeProfile',ChangeProfileAPI)

export default router