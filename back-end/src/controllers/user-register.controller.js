import { SALT } from '#Constants/salt.js';
import UserModel from '#Schemas/user.schema.js';
import { hash } from 'bcrypt';

const userRegisterController = async (req, res) => {
    const { name, email, password } = req.body;

    const existingUserByEmail = await UserModel.findOne({ email }).exec();
    if (existingUserByEmail)
        return res
            .status(409)
            .send({ errors: ['Ya existe un usuario con ese email'] });

    const hasedPassword = await hash(password, SALT);

    const user = new UserModel({ name, email, password: hasedPassword });

    await user.save();

    return res.status(200).send('Usuario registrado con éxito');
};

export default userRegisterController;
