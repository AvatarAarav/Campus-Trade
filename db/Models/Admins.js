import mongoose from "mongoose";


const AdminSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
    }
);

const Admins = mongoose.model("Admins", AdminSchema);

export default Admins;
