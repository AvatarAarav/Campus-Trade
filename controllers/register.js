import { AddUser } from "../db/DB_Functions.js";
export const addUserAPI=async (req,res)=>{
    try {
        AddUser(req.body)
        res.status(200).send(`User Registered`);
    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(404).send(`${error.message}!!`)
    }
}