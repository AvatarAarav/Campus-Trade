import User from "../db/Models/User.js";
export const getAllUsersEmailAPI = async(req, res) => {
    try {
        const user = await User.find({}, { email: 1, _id: 0 });

        res.status(200).json({ data: user }); //sucesful request(200) and sending data as JSON(javascript object notation)
    } catch (error) {
        console.error(`${error.message}!!`)
        res.status(404).send(`${error.message}!!`)
    }
}