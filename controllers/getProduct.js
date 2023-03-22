import { getProduct } from "../db/DB_Functions.js";
export const getProductAPI=async (req,res)=>{
    try {
        const id=req.params.id;  //url parameters id
        const product=await getProduct(id)
        res.status(200).render('ad_details',{ad:product[0]});//first and the only object
    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(404).send(`${error.message}!!`)
    }
}