import UserModel from '#Schemas/user.schema.js';

const userFavoritesAddController = async (req, res) => {
    const { id } = req.body;

    const existingUserById = await UserModel.findById(req.id).exec();

    if (existingUserById.favorites.includes(id))
        return res
            .status(400)
            .send({ errors: ['ID-REPEAT:La id ya esta en favoritos'] });

    existingUserById.favorites.push(id);

    await existingUserById.save();

    return res.status(200).send('Favorito añadido con éxito');
};

export default userFavoritesAddController;
