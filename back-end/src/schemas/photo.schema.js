import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const photoSchema = new Schema({
    image: {
        type: String,
        require: true,
    },
    daytime: {
        type: Boolean,
        require: true,
    },
});

const PhotoModel = model('Photo', photoSchema);

export default PhotoModel;
