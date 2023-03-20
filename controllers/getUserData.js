import { getUserDataAPI } from "../db/DB_Functions.js";
export const getUserData=async (req,res)=>{
    try {
        // console.log(req.body)
        const userData=await getUserDataAPI(req.body)
        if(userData.err) res.status(404).render('index',{user: undefined})
        else res.status(200).render('USER_PROFILE',{user:userData})
    } catch (error) {
        console.error(`${error.message}!!`)
        //Not returning error but rendering the same page with no change
        res.render('index',{user : undefined});
    }
}