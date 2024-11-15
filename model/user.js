// - **User**: Handles users with roles like admin, client, and driver.
// - Fields: `username`, `email`, `password`, `role`, `contactInfo`, `assignedOrders`.

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    },
    role:{
        type: String,
        enum: ['user', 'admin', 'driver'],
        default: 'user'
    },
    contactInfo: {
        type: String
    },
    assignedOrders: {
        type: Array
    }
},{timestamps: true});

const userModel = mongoose.model('User', UserSchema);

module.exports = userModel;