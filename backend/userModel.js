const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide name"],

    },
    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email Exist"],
    },

    password: {
        type: String,
        required: [true, "Please provide a password!"],
        unique: false,
    },
    address: {
        type: String,
        required: [true, "Please provide your Address"],

    }
})
module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);


