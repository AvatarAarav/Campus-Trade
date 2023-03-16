import { checkLogin } from "../db/DB_Functions.js";
export const checkLoginAPI=async (req,res)=>{
    try {
        console.log(req.body)
        const userData=await checkLogin(req.body)
        res.status(200).json(userData);
    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(404).send(`${error.message}!!`)
    }
}