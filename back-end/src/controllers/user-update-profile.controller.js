import UserModel from '#Schemas/user.schema.js';

const userUpdateProfileController = async (req, res) => {
    const { name, email } = req.body;

    const existingUserById = await UserModel.findById(req.id).exec();
    if (!existingUserById)
        return res.status(401).send({ errors: ['Usuario no autorizado'] });

    existingUserById.name = name;
    existingUserById.email = email;

    await existingUserById.save();

    return res.status(200).send('Usuario actualizado con éxito');
};

export default userUpdateProfileController;
