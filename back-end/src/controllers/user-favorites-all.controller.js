import CarModel from '#Schemas/car.schema.js';
import UserModel from '#Schemas/user.schema.js';

const userFavoritesAllController = async (req, res) => {
    const existingUserById = await UserModel.findById(req.id).exec();
    const favorites = await Promise.all(
        existingUserById.favorites.map(async (currentId) => {
            const carData = await CarModel.findById(currentId).exec();
            return carData;
        })
    );
    return res.status(200).send({ favorites });
};

export default userFavoritesAllController;
