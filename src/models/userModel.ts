import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a user name"]
    },
    email: {
        type: String,
        required: [true, 'Please provide a email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
    },
    phoneNumber:{
        type: String,
        required: [true, 'Please provide a Phone Number'],
    }
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
