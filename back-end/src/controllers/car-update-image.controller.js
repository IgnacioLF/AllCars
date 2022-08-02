import CarModel from '#Schemas/car.schema.js';
import * as fs from 'fs';

const carUpdateImageController = async (req, res) => {
    const { id } = req.body;
    if (req.file_error)
        return res
            .status(400)
            .send({ errors: ['Formato de imagen incorrecto jpeg/png'] });
    const image = req.file.path;
    const car = await CarModel.findById(id).exec();

    fs.unlink(car.image, async (err) => {
        if (err !== null) {
            console.log('error removing image:', err);
            return res.send(500);
        } else {
            car.image = image;
            await car.save();
            return res.status(200).send('imagen actualizada con éxito');
        }
    });
};

export default carUpdateImageController;
