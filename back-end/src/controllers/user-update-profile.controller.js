import UserModel from '#Schemas/user.schema.js';
import { compare } from 'bcrypt';

const userUpdateProfileController = async (req, res) => {
    const { name, email, password } = req.body;

    const existingUserById = await UserModel.findById(req.id).exec();
    if (!existingUserById)
        return res.status(401).send({ errors: ['Usuario no autorizado'] });

    const existingEmail = await UserModel.findOne({ email }).exec();
    if (existingEmail && existingUserById.email !== email)
        return res.status(409).send({
            errors: ['EMAIL-EXIST:Ya existe un usuario con ese email'],
        });

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
