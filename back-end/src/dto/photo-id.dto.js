import PhotoModel from '#Schemas/photo.schema.js';

const photoIDDTO = async (req, res, next) => {
    const { id } = req.body;
    if (!id) return res.status(401).send({ errors: ['Id requerida'] });
    const existingPhotoById = await PhotoModel.findById(id).exec();
    if (!existingPhotoById)
        return res.status(404).send({ errors: ['Id erronea'] });
    next();
};

export default photoIDDTO;
