import PhotoModel from '#Schemas/photo.schema.js';

const photoNewController = async (req, res) => {
    const daytime = req.query.daytime === 'true';

    if (req.file_error)
        return res
            .status(400)
            .send({ errors: ['Formato de imagen incorrecto jpeg/png'] });

    const image = req.file.path;

    const photo = new PhotoModel({ image, daytime });

    await photo.save();

    return res.status(200).send('Nuevo foto registrada con éxito');
};

export default photoNewController;
