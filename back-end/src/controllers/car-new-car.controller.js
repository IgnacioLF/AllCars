import CarModel from '#Schemas/car.schema.js';

const carNewCarController = async (req, res) => {
    const { name, type, price, description } = req.body;

    const existingCarByName = await CarModel.findOne({ name }).exec();
    if (existingCarByName)
        return res.status(409).send({
            errors: ['CARNAME-EXIST:Ya existe un coche con ese nombre'],
        });

    if (req.file_error)
        return res
            .status(400)
            .send({ errors: ['Formato de imagen incorrecto jpeg/png'] });

    const image = req.file.path;

    const car = new CarModel({ name, type, price, description, image });

    await car.save();

    return res.status(200).send('Nuevo coche registrado con éxito');
};

export default carNewCarController;
