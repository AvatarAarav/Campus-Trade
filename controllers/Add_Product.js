import { AddFormData } from "../db/DB_Functions.js";
export const submitForm=(req,res)=>{
    // console.log(req.body);
    const photo = req.file;
    AddFormData({...req.body,photo})
}