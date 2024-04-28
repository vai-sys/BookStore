const User = require("../model/user.model");

const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        
        // Check if the user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create a new user instance
        const createdUser = new User({
            fullname,
            email,
            password
        });

        // Save the user to the database
        await createdUser.save();

        // Respond with success message
        res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        console.log("Error:", err.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = { signup };

