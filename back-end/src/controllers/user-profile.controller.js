import UserModel from '#Schemas/user.schema.js';

const userProfileController = async (req, res) => {
    const existingUserById = await UserModel.findById(req.id).exec();
    if (!existingUserById)
        return res.status(401).send({ errors: ['Usuario no autorizado'] });

    const { name, email } = existingUserById;

    return res.send({ name, email });
};

export default userProfileController;
