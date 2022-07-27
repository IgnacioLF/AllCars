import mongoose from 'mongoose';

const connectDB = async (url) => {
    await mongoose
        .connect(url)
        .then(() => console.log('Database connected'))
        .catch((err) => console.log('Error concecting database', err));
};

export default connectDB;
