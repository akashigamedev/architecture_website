const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./models/User");
const projectRoutes = require("./routes/ProjectRoutes");
require("dotenv").config();

const dbURI = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.objwk.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority&appName=Cluster0`;
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(dbURI)
  .then(() => {
    app.listen(PORT);
    console.log(`Connected to db & started server on port ${PORT}`);
  })
  .catch((err) => {
    console.log("Failed to connect to db: ", err);
  });

app.post("/api/admin/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) return res.status(401).json({ message: "Invalid credentials" });

    const accessToken = jwt.sign(
      { username: user.username },
      process.env.TOKEN_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ accessToken: accessToken });
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

app.use("/api/admin", projectRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Invalid route" });
});
