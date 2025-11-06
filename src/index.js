const express = require("express");
const connectToDatabase = require("./config/database");
const User = require("./models/user");

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  const {
    firstName,
    lastName,
    emailId,
    password,
    age,
    gender,
    photoURL,
    about,
  } = req.body;

  try {
    const newUser = new User({
        firstName : firstName,
         lastName : lastName,
        emailId : emailId,
        password : password,
        age : age,
        gender : gender,
        photoURL : photoURL,
        about : about,

    });
    console.log(req.body)
    await newUser.save();
    res.send("User created successfully!");
  } catch (error) {
    return res.status(500).send("Error creating user: " + error.message);
  }
});

connectToDatabase()
  .then(() => {
    console.log("Database connected successfully!");
    app.listen(3528, () => {
      console.log("server is running on port 3528");
    });
  })
  .catch((err) => {
    console.log("Database connection failed : ", err);
  });
