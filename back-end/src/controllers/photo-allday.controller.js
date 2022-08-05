import PhotoModel from '#Schemas/photo.schema.js';

const photoAllDayController = async (req, res) => {
    const photos = await PhotoModel.find({ daytime: true }).exec();

    return res.status(200).send({ photos });
};

export default photoAllDayController;
