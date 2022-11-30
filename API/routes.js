const Users = require("./userModel");
const bcrypt = require("bcrypt");
const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.get("/users", async (req, res) => {
  const allUsers = await Users.find();
  res.send(allUsers);
});

router.get("/users/:id", async (req, res) => {
  const singleUser = await Users.findById(req.params.id);
  const { password, ...rest } = singleUser._doc;
  res.send(rest);
});

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const myUser = new Users({
      userName: req.body.userName,
      email: req.body.email,
      password: hashedPassword,
      isAdmin: req.body.isAdmin,
    });

    const user = await myUser.save();
    res.status(200).send(`Welcome on board ${user.userName}`);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const foundedUser = await Users.findOne({ email: req.body.email });
    if (foundedUser) {
      const validatedPassword = await bcrypt.compare(
        req.body.password,
        foundedUser.password
      );
      if (validatedPassword) {
        const token = jwt.sign(
          {
            userID: foundedUser._id,
            userName: foundedUser.userName,
            userIsAdmin: foundedUser.isAdmin,
          },
          process.env.SECRET_KEY
        );
        res.status(200).send(token);
      } else {
        res.status(401).send("Wrong credentials");
      }
    } else {
      res.status(404).json("User not found please sign up first");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

function verifyToken(req, res, next) {
  const LoginToken = req.headers.authorization.split(" ")[1];
  if (LoginToken) {
    jwt.verify(LoginToken, process.env.SECRET_KEY, (err, userData) => {
      if (err) {
        res.status(500).send(err);
      } else {
        req.user = userData;
      }
    });
  } else {
    res.status(401).json("You are not authenticated");
  }
  next();
}

router.put("/users/:id", verifyToken, async (req, res) => {
  if (req.user.userID === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      Users.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("User have been updated successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not authorized to update this user!");
  }
});

router.delete("/users/:id", verifyToken, async (req, res) => {
  try {
    if (req.user.userID === req.params.id || req.user.isAdmin) {
      Users.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted successfully!");
      console.log("User is deleted successfully!");
    } else {
      res.status(403).json("You are not allowed to delete this user!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
