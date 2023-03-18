import { checkLogin } from "../db/DB_Functions";
export const getAllProductsAPI=async (req,res)=>{
    try {
        const userData=await checkLogin(req.body)
        res.status(200).json(userData);
    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(404).send(`${error.message}!!`)
    }
}