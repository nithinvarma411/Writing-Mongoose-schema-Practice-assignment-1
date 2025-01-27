import { Schema, model } from "mongoose";

const userSchema = new Schema({
    userName: {
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
        required: true,
    },
    roles: {
        type: [String],
        enum: ["user", "admin"],
        default: ["user"],
    },
    profile: {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            min: 0,
        },
    },
    lastLogin: {
        type: Date,
        default: null,
    },
}, { timestamps: true });

const User = model("User", userSchema);

export default User;
