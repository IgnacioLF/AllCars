import UserModel from '#Schemas/user.schema.js';
import { compare } from 'bcrypt';

const userUpdateProfileController = async (req, res) => {
    const { name, email, password } = req.body;

    const existingUserById = await UserModel.findById(req.id).exec();
    if (!existingUserById)
        return res.status(401).send({ errors: ['Usuario no autorizado'] });

    const checkPassword = await compare(password, existingUserById.password);
    if (!checkPassword)
        return res
            .status(401)
            .send({ errors: ['PASSWORD-CONTENT:Contraseña erronea'] });

    existingUserById.name = name;
    existingUserById.email = email;

    await existingUserById.save();

    return res.status(200).send('Usuario actualizado con éxito');
};

export default userUpdateProfileController;
