import { getAllProducts } from "../db/DB_Functions.js";
export const getAllProductsAPI=async (req,res)=>{
    try {
        const products=await getAllProducts()  //function to get db data
        res.status(200).json({data:products}); //sucesful request(200) and sending data as JSON(javascript object notation)
    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(404).send(`${error.message}!!`)
    }
}