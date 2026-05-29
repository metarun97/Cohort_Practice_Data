// Require dependencies⬇️
const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const redis = require("../db/redis")


// Register user controller function⬇️
const registerUser = async (req, res) => {
  try {
    const { username, email, password, fullName } = req.body;

    //  Check if user with same username or email already exists⬇️
    const isUserAlreadyExists = await userModel.findOne({
      $or:
        [
          { username },
          { email }
        ]
    });

    // Check if user with same username or email already exists⬇️
    if (isUserAlreadyExists) {
      return res.status(409).json({
        message: "User with the same username or email already exists"
      });
    }

    // Hash the password⬇️
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user document⬇️
    const user = await userModel.create({
      username,
      email,
      password: hashedPassword,
      fullName
    });

    // create token⬇️
    const token = jwt.sign({
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    }, process.env.JWT_SECRET, { expiresIn: "1d" });

    // set in cookie⬇️
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000 // 1 day,
    });

    // final response⬇️
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        fullName: user.fullName,
        addresses: user.addresses,
      }
    })
  } catch (error) {
    // If Mongoose validation failed, return 400 with a clear message
    if (error && error.name === 'ValidationError') {
      console.error('Validation error in registerUser:', error.message);
      return res.status(400).json({ message: 'Validation error' });
    }

    console.error("Error in registerUser controller:", error && error.message ? error.message : error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Login user controller function⬇️
const loginUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Find user by username or email and include password field⬇️
    const user = await userModel.findOne({
      $or: [
        { username },
        { email }
      ]
    }).select("+password");

    // Check if user exists⬇️
    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }
    // Compare provided password with hashed password in database⬇️
    const isMatch = await bcrypt.compare(password, user.password);

    // If password does not match⬇️
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    // create token⬇️
    const token = jwt.sign({
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    }, process.env.JWT_SECRET, { expiresIn: "1d" });

    // set in cookie⬇️
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000 // 1 day,
    });


    // final response⬇️
    res.status(200).json({
      message: "User logged in successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        fullName: user.fullName,
        addresses: user.addresses,
      }
    })
  } catch (err) {
    console.log("Error in loginUser controller:", err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
}

// me user controller function⬇️
const getCurrentUser = async (req, res) => {
  res.status(200).json({
    message: "Current user fetched successfully",
    user: req.user
  });
}

// logiut user controller function⬇️
const logoutUser = async (req, res) => {
  try {
    const token = req.cookies.token;

    // if token found, blacklist it in redis so that it cannot be used again until it expires⬇️
    if (token) {
      // blacklist token in redis with expiry same as token expiry⬇️
      await redis.set(`blacklist:${token}`, true, 'EX', 24 * 60 * 60); // 1 day
    }
    // clear cookie⬇️
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
    });
    // final response⬇️
    res.status(200).json({
      message: "User logged out successfully"
    });
  } catch (error) {
    console.log("Error in logoutUser controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}


// ⬇️ List addresses for current user⬇️
const getUserAddresses = async (req, res) => {
  try {
    // Find user by ID from req.user set by auth middleware⬇️
    const id = req.user.id;

    const user = await userModel.findById(id).select("addresses");

    // Check if user exists⬇️
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    // final response⬇️
    return res.status(200).json({
      message: 'Addresses fetched successfully',
      addresses: user.addresses
    });
  } catch (err) {
    console.error('Error in listAddresses:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
// Add address for current user⬇️
const addUserAddress = async (req, res) => {
  try {
    const id = req.user.id;
    const { street, city, state, country, pincode, isDefault = false, phone } = req.body;

    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // If new address should be default, unset previous defaults
    if (isDefault) {
      user.addresses.forEach(a => { a.isDefault = false; });
    }

    user.addresses.push({ street, city, state, pincode, country, isDefault, phone });
    await user.save();

    const newAddr = user.addresses[user.addresses.length - 1];

    return res.status(201).json({
      message: 'Address added successfully',
      address: newAddr
    });
  } catch (err) {
    console.error('Error in addAddress:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// Delete address for current user⬇️
const deleteUserAddress = async (req, res) => {
  try {
    const id = req.user.id;
    const { addressId } = req.params;

    // Find user first to verify existence and whether the address exists⬇️
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the address exists on the user document⬇️
    const addr = user.addresses.id(addressId);
    if (!addr) {
      return res.status(404).json({ message: 'Address not found' });
    }

    // Remove the address from the array and save the user⬇️
    user.addresses = user.addresses.filter(a => a._id.toString() !== addressId);
    await user.save();

    return res.status(200).json({ message: 'Address deleted successfully' });
  } catch (err) {
    console.error('Error in deleteUserAddress:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// Export element⬇️
module.exports = {
  registerUser,
  loginUser,
  getCurrentUser,
  logoutUser,
  getUserAddresses,
  addUserAddress,
  deleteUserAddress,
};
