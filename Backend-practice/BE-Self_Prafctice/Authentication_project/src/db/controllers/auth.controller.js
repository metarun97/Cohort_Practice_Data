const userModel = require("../../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// * Register API:-
async function registerUser(req, res) {
  const { username, password } = req.body;

  // username se find kro user ko:-
  const userAlreadyExist = await userModel.findOne({
    username,
  })

  // Ye user pehle se hua to ye kro:-
  if (userAlreadyExist) {
    return res.status(409).json({
      message: "This username already in use!"
    })
  }

  // Agar nai mila user to banao register kro:-
  const user = await userModel.create({
    username, password: await bcrypt.hash(password, 10)
  })

  // Ek token bhi do banakr:-
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
  res.cookie("token", token)

  res.status(201).json({
    message: "User registered successfully!",
    user
  })
}

// * Login API:-
async function loginUser(req, res) {
  const { username, password } = req.body;

  const user = await userModel.findOne({ username });


  if (!user) {
    return res.status(401).json({
      message: "User not found!",
    })
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);


  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invaid Password!",
    })
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.cookie("token",token);

  res.status(200).json({
    message: "User loggedin successfully!",
    user,
  })

}

// * User API:-
async function findUser(req, res) {
  const { token } = req.cookies;

  // Agar token mila hi nahi:-
  if (!token) {
    return res.status(401).json({
      message: "Unautherized token not found!",
    })
  }

  // Token save kia jo register ya login k time dia hoga:-
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Token se user ko nikalenge:-
    const user = await userModel.findOne({
      _id: decoded.id,
    })
    res.status(200).json({
      message: "User fetched successfully!",
      user,
    })

    // Token nahi mile to ye hoga:-
  } catch (error) {
    return res.status(401)
      .json({
        message: "Unautherized Invalid token!"
      })
  }

}

// * User API:-
async function logoutUser(req, res) {
  res.clearCookie("token")

  res.status(200).json({
    message: "User loggedout successfully!",
  })
}


module.exports = { registerUser, loginUser, findUser, logoutUser };
