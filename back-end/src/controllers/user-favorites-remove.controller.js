import UserModel from '#Schemas/user.schema.js';

const userFavoritesRemoveController = async (req, res) => {
    const { id } = req.body;

    const existingUserById = await UserModel.findById(req.id).exec();

    if (!existingUserById.favorites.includes(id))
        return res
            .status(400)
            .send({ errors: ['ID-NOTFOUND:La id no esta en favoritos'] });

    existingUserById.favorites = existingUserById.favorites.filter(
        (currentId) => currentId !== id
    );

    await existingUserById.save();

    return res.status(200).send('Favorito eliminado con éxito');
};

export default userFavoritesRemoveController;
