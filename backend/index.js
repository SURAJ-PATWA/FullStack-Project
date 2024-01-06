const path=require("path")



const express = require("express");
const app = express();
require("./database");
require('dotenv').config();
const cors = require('cors');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./userModel");

const port = 8080;

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname,'./my-pages/build')))

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./my-pages/build/index.html'))
})

//register api
app.post("/register", (request, response) => {



   
    bcrypt
        .hash(request.body.password, 10)
        .then((hashedPassword) => {
           
            const user = new User({
                name: request.body.name,
                email: request.body.email,
                password: hashedPassword,
                address: request.body.address
            });


            user
                .save()

                .then((result) => {
                    response.status(201).send({
                        message: "User Created Successfully",
                        result,
                    });
                })

                .catch((error) => {
                    response.status(500).send({
                        message: "Error creating user",
                        error,
                    });
                });
        })

        .catch((e) => {
            response.status(500).send({
                message: "Password was not hashed successfully",
                e,
            });
        });
});

  //login api
app.post("/login", (request, response) => {
   
    User.findOne({ email: request.body.email })

       
        .then((user) => {
            bcrypt
                .compare(request.body.password, user.password)

                
                .then((passwordCheck) => {

                   
                    if (!passwordCheck) {
                        return response.status(400).send({
                            message: "Passwords does not match",
                            error,
                        });
                    }

                    const token = jwt.sign(
                        {
                            userId: user._id,
                            userEmail: user.email,
                        },
                        "RANDOM-TOKEN",
                        { expiresIn: "24h" }
                    );

                  
                    response.status(200).send({
                        message: "Login Successful",
                        email: user.email,
                        token,
                    });
                })
              
                .catch((error) => {
                    response.status(400).send({
                        message: "Passwords does not match",
                        error,
                    });
                });
        })
      
        .catch((e) => {
            response.status(404).send({
                message: "Email not found",
                e,
            });
        });
});

app.listen(port, () => {
    console.log("our server runing on port no 8080");
});
