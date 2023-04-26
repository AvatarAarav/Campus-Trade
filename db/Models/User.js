import mongoose from "mongoose";


const UserSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
        college_name: String,
        ads:[String],
        report:[String],
    }
);

const Users = mongoose.model("Users", UserSchema);

export default Users;
