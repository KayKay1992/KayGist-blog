import bcryptjs from 'bcryptjs';
import User from "../models/user.model.js";
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken'

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

export const signin = async (req, res, next) => {
  // Implement signin logic here
  // console.log(req.body) 
 // instaed of console logging lets now search the user in the data base.
 // We get the email mand password from the user and we test the email and password and if everything is alright we set a cookie inside the browser of the user. we use it and check if the person is authenticated or not, we installed a package jsonwebtoken
 const { email, password} =req.body;
 if (!email || !password || email === '' || password === '') {
   next(errorHandler(400, 'All fields are required'))
 };
 try{
  const validUser = await User.findOne({email})
  if(!validUser) {
   return  next(errorHandler(404, 'Invalid email or password'));
  }
  const validPassword = bcryptjs.compareSync(password, validUser.password);
  if(!validPassword) {
   return next(errorHandler(404, 'Invalid email or password'));
  }
  const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET);

  // Exclude the password field from the response object. This is to prevent exposing sensitive information.
  const {password: pass, ...rest} = validUser._doc

  // Set the token in the response cookie, with httpOnly set to true, so it can't be accessed from JavaScript.
  res.status(200).cookie('access_token', token, {httpOnly: true}).json(rest);

 }catch(error){
  next(error);

 }
}