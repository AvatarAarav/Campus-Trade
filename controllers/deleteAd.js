import Products from "../db/Models/Products.js";
export const delProductAPI=async (req,res)=>{
    try {
        const id=req.params.id;  //url parameters id
        const product=await Products.findById(id)
        res.status(200).render('ad_details',{ad:product});
    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(404).send(`${error.message}!!`)
    }
}