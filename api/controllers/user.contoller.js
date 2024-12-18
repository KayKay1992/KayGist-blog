import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs';

export const test =  (req, res) => {
    res.json({ message: 'API is working properly!' });
}

export const updateUsers = async (req, res, next) => {
    // console.log(req.user)
    if (req.user.id !== req.params.userId) {
        return next(errorHandler(403, 'you are not allowed to update this user'));
    }
    if(req.body.password){
        if(req.body.password.length < 6) {
            return next(errorHandler(400, 'Password should be at least 6 characters long'));
        }
        req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    if(req.body.username){
        if(req.body.username.length < 6 || req.body.username.length > 20){
            return next(errorHandler(400, 'Username must be between 6 and 20 characters'))
        }
        if(req.body.username.includes(' ')){
            return next(errorHandler(400, 'Username cannot contain spaces'))
        }
        if(req.body.username !== req.body.username.toLowerCase()){
            return next(errorHandler(400, 'Username should be in lowercase'))
        }
        if(!req.body.username.match(/^[a-zA-Z0-9]+$/)){
            return next(errorHandler(400, 'Username should only contain alphanumeric characters'))
        }
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.userId, {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    profilePicture: req.body.profilePicture
                },
            }, {new: true});
            const {password, ...rest} = updatedUser._doc
            res.status(200).json(rest)
        }catch(error){
            next(error);
        }
    }
}