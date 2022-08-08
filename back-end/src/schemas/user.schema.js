import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        require: true,
        minLenght: 4,
        maxLenght: 15,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    favorites: [
        {
            type: String,
        },
    ],
});

const UserModel = model('User', userSchema);

export default UserModel;
