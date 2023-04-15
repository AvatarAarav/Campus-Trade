import Products from "../db/Models/Products.js";

export const getUserCardsAPI=async (req,res)=>{
    try {
        const products=await Products.find({email:req.params.email})
        res.status(200).json({ads:products});
    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(404).send(`${error.message}!!`)
    }
}