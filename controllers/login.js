import Users from "../db/Models/User.js";
import Admins from "../db/Models/Admins.js";
export const checkLoginAPI=async (req,res)=>{
    try {
        if(req.body.admin){
            const adminData=await Admins.find({email:req.body.email})
            if(adminData[0].password==req.body.password){
                res.status(200).render('adminPortal',{user :adminData[0]});
            }
            else{
                res.render('index',{user : undefined});
            }
        }
        else{
            const userData=await Users.find({email:req.body.email})
            if(userData[0].password==req.body.password){
                res.status(200).render('index',{user :userData[0]});
            }
            else{
                res.render('index',{user : undefined});
            }
        }
        // console.log(`user=${userData}`)
        
    } catch (error) {
        console.error(`${error.message}!!`)
        //Not returning error but rendering the same page with no change
        res.render('index',{user : undefined});
    }
}