import * as fs from 'fs';
import PhotoModel from '#Schemas/photo.schema.js';

const photoRemoveController = async (req, res) => {
    const { id } = req.body;
    const photo = await PhotoModel.findById(id).exec();

    fs.unlink(photo.image, async (err) => {
        if (err !== null) {
            console.log('error removing image:', err);
            return res.send(500);
        } else {
            await photo.remove();

            return res.status(200).send('Foto eliminado éxito');
        }
    });
};

export default photoRemoveController;
