import * as fs from 'fs';
import CarModel from '#Schemas/car.schema.js';

const carRemoveController = async (req, res) => {
    const { id } = req.body;
    const car = await CarModel.findById(id).exec();

    fs.unlink(car.image, async (err) => {
        if (err !== null) {
            console.log('error removing image:', err);
            return res.send(500);
        } else {
            await car.remove();

            return res.status(200).send('Coche eliminado éxito');
        }
    });
};

export default carRemoveController;
