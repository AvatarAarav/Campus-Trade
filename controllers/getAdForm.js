import { checkLogin } from "../db/DB_Functions.js";
export const getAdFormAPI=async (req,res)=>{
    try {
        // console.log(req.body)
        const userData=await checkLogin(req.body)
        // console.log(`user=${userData}`)
        if(userData.err) res.status(404).render('index',{user: undefined})
        else res.status(200).render('product_form',{user :userData});
    } catch (error) {
        console.error(`${error.message}!!`)
        //Not returning error but rendering the same page with no change
        res.render('index',{user : undefined});
    }
}