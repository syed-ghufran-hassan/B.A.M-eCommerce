import User from "../models/userSchema.js";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import createError from "http-errors";
import bcrypt from "bcrypt";

export const getAllUser = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (e) {
        next(e);
    }
};

export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) throw new createError.NotFound();
        res.status(200).send(user);
    } catch (e) {
        next(e);
    }
};

export const loginUser = async (req, res, next) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await User.findOne({ email: email });

        if (user && user._id && bcrypt.compareSync(password, user.password)) {
            loginUserAndCreateToken(user,res);
        }else{
            res.status(400).json("ERROR_CODE: AUTHENTICATION");
        }

    } catch (e) {
        next(e);
    }
};

export const registerUser = async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        //Create array of error messages using validation result
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
        }

        //Check if user already exists
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: "User Already Exists" });
        }

        //Create a new user
        const newUser = new User({
            firstName,
            lastName,
            email,
            password, // 1234
        });

        //hash the password for the new user in order to save to DB
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);

        await newUser.save();

        loginUserAndCreateToken(newUser,res);

    } catch (e) {
        next(e);
    }
};

function loginUserAndCreateToken(user, res){
    // try {
        const payload = {
            user: {
                id: user._id,
            },
        };

        jwt.sign(
            payload,
            "randomString",
            { expiresIn: "1h" },
            (err, token) => {
                if (err) throw err;
                res.status(200).json({ token, user: {_id: user._id, firstName: user.firstName, lastName: user.lastName, email: user.email} });
            },
        );
    // } catch (error) {
    //     console.error("failed to login user, email:" + email + " error:" + error);
    //     res.status(500).send("Server Error");
    // }
}
