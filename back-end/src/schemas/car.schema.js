import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const carSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true,
        minLenght: 4,
        maxLenght: 25,
    },
    type: {
        type: String,
        require: true,
    },
    price: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
});

const CarModel = model('Car', carSchema);

export default CarModel;
