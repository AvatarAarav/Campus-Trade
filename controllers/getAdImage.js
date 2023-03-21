import { getProduct } from "../db/DB_Functions.js";
export const getAdImageAPI=async (req,res)=>{
    try {
        const id=req.params.id;
        const product=await getProduct(id)
        res.status(200).json({ad:product[0]});
    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(404).send(`${error.message}!!`)
    }
}