import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    profilePicture: {
      type: String,
      default: 'https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_1280.png',
    },
   
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;