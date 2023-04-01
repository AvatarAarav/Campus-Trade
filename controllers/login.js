import Users from "../db/Models/User.js";
export const checkLoginAPI=async (req,res)=>{
    try {
        // console.log(req.body)
        const userData=await Users.find({email:req.body.email})
        if(userData[0].password==req.body.password){
            res.status(200).render('index',{user :userData[0]});
        }
        else{
            res.render('index',{user : undefined});
        }
        // console.log(`user=${userData}`)
        
    } catch (error) {
        console.error(`${error.message}!!`)
        //Not returning error but rendering the same page with no change
        res.render('index',{user : undefined});
    }
}