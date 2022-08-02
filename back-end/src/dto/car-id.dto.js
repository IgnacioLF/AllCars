import CarModel from '#Schemas/car.schema.js';

const carIDDTO = async (req, res, next) => {
    const { id } = req.body;
    if (!id) return res.status(401).send({ errors: ['Id requerida'] });
    const existingCarById = await CarModel.findById(id).exec();
    if (!existingCarById)
        return res.status(404).send({ errors: ['Id erronea'] });
    next();
};

export default carIDDTO;
