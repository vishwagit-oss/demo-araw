import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String, requrire: true}
})

const User = mongoose.models.USer  || mongoose.model("User", userSchema)
export default User