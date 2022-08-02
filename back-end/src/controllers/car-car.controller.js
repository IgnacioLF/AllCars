import CarModel from '#Schemas/car.schema.js';

const carCarController = async (req, res) => {
    const { id } = req.body;
    const car = await CarModel.findById(id).exec();

    return res.status(200).send(car);
};

export default carCarController;
