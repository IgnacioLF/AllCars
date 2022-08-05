import PhotoModel from '#Schemas/photo.schema.js';

const photoAllNightController = async (req, res) => {
    const photos = await PhotoModel.find({ daytime: false }).exec();

    return res.status(200).send({ photos });
};

export default photoAllNightController;
