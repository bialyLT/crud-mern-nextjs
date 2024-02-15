const mongoose = require('mongoose');
const { Schema, Model } = mongoose;

const userSchema = new Schema({
    username:
    {
        type: String,
        required: [true, 'Username is required']
    },
    name: 
    {
        type: String,
        required: [true, 'Name is required']
    },
    lastname:
    {
        type: String,
        required: [true, 'Lastname is required']
    },
    age: 
    {
        type: Number,
        required: [true, 'Age is required'],
        min: [18, 'Age must be 18 and or above'],
        max: 120
    }
});

const User = module.export =  Model('User', userSchema);


