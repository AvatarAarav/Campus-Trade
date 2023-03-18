import { AddUser } from "../db/DB_Functions.js";
export const addUserAPI=async (req,res)=>{
    try {
        // console.log(req.body)
        AddUser(req.body)
        console.log("User Added")
        res.status(200).json({message:`User Registered`});
    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(404).send(`${error.message}!!`)
    }
}