import Products from "../db/Models/Products.js";
export const getAllProductsAPI=async (req,res)=>{
    try {
        const page=req?.params?.page || 1;
        const LIMIT=6;
        const startIndex=(Number(page)-1)*LIMIT
        const total=await Products.countDocuments({})
        const products=await Products.find().sort({_id:-1}).limit(LIMIT).skip(startIndex);
        res.status(200).json({data:products,currentPage:Number(page),numberOfPage:Math.ceil(total/LIMIT)});//sucesful request(200) and sending data as JSON(javascript object notation)
    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(404).send(`${error.message}!!`)
    }
}