import { getAllProducts } from "../db/DB_Functions.js";
export const getAllProductsAPI=async (req,res)=>{
    try {
        const products=await getAllProducts()
        res.status(200).json({data:products});
    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(404).send(`${error.message}!!`)
    }
}