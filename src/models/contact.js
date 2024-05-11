import mongoose from "mongoose";

const contactShema = mongoose.Schema({
    username: String,
    email: String,
    phone: String,
    message: String

});


export default mongoose.models.contact || mongoose.model("model", contactShema);