import CarModel from '#Schemas/car.schema.js';

const carAllController = async (req, res) => {
    const cars = await CarModel.find().exec();

    return res.status(200).send({ cars });
};

export default carAllController;
