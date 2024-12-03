import bcryptjs from 'bcryptjs';
import User from "../models/user.model.js";
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
    // Implement signup logic here
    // console.log(req.body) instaed of console logging lets now save the information inside the data base.

    const {username, email, password} = req.body;
    if (!username || !email || !password || username === '' || email === '' || password === '') 
      {
      next(errorHandler(400, 'All fields are required'))
      }

    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User({username, email, password: hashedPassword});
  try {
    await newUser.save();
    res.status(200).json('User registered successfully!');
  }catch(error) {
   next(error);
  }
   
};