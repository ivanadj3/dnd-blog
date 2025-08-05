import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required:true,
    },
    profilePicture:{
        type: String,
        default: "https://images.icon-icons.com/3158/PNG/512/viking_halloween_costume_character_avatar_icon_193275.png",
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    }, {timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;