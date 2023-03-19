import { AddUser } from "../db/DB_Functions.js";
export const addUserAPI=async (req,res)=>{
    try {
        console.log(req.body)
        const userData= await AddUser(req.body)
        
        // console.log("User Added")
        res.status(200).render('index',{user :userData});
    } catch (error) {
        console.error(`${error.message}!!`)
        res.render(`index`,{user : undefined})
    }
}