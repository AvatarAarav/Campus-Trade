import Products from "../db/Models/Products.js";
import Users from "../db/Models/User.js";
export const delProductAPI=async (req,res)=>{
    try {
        const id=req.params.id;  //url parameters id
        await Products.deleteOne({_id:id})
        const userData=await Users.findOne({email:req.params.eid})
        res.status(200).render('USER_PROFILE',{user:userData})
    } catch (error) {
        console.error(`${error.message}!!`)
        res.render('index',{user : undefined});
    }
}