import { checkLogin } from "../db/DB_Functions.js";
export const checkLoginAPI=async (req,res)=>{
    try {
        // console.log(req.body)
        const user=await checkLogin(req.body)
        // console.log(`user=${user}`)
        res.status(200).render('index',user);
    } catch (error) {
        console.error(`${error.message}!!`)
        //Not returning error but rendering the same page with no change
        res.render('index',{name:undefined});
    }
}