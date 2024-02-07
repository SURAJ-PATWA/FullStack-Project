
const mongoose = require("mongoose");

mongoose
mongoose.connect("mongodb+srv://akku:mongodb@cluster0.7pfufd9.mongodb.net/loginpage", {
   

        

    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });
