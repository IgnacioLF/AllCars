import UserModel from '#Schemas/user.schema.js';

const userFavoritesCheckController = async (req, res) => {
    const { id } = req.body;

    const existingUserById = await UserModel.findById(req.id).exec();

    const isFav = existingUserById.favorites.includes(id);

    return res.status(200).send({ isFav });
};

export default userFavoritesCheckController;
