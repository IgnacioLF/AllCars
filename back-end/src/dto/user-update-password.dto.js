import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import { newPasswordSTOSchema, passwordSTOSchema } from '#Dto/dto-types.js';

const UpdatePasswordDTOSchema = Type.Object(
    {
        oldPassword: passwordSTOSchema,
        newPassword: newPasswordSTOSchema,
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties:
                'El formato del objeto del formulario de actualizar contraseña no es válido',
        },
    }
);

const ajv = new Ajv({ allErrors: true });

ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);
addErrors(ajv).addKeyword('kind').addKeyword('modifier');

const validateSchema = ajv.compile(UpdatePasswordDTOSchema);

const userUpdatePasswordDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body);

    if (!isDTOValid)
        return res.status(400).send({
            errors: validateSchema.errors.map((err) => err.message),
        });

    next();
};

export default userUpdatePasswordDTO;
