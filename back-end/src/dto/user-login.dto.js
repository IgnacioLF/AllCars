import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import addErrors from 'ajv-errors';
import { emailDTOSchema, passwordSTOSchema } from '#Dto/dto-types.js';

const LoginDTOSchema = Type.Object(
    {
        email: emailDTOSchema,
        password: passwordSTOSchema,
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties:
                'El formato del objeto del formulario de logeo no es válido',
        },
    }
);

const ajv = new Ajv({ allErrors: true });

ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);
addFormats(ajv, ['email']).addKeyword('kind').addKeyword('modifier');
addErrors(ajv);

const validateSchema = ajv.compile(LoginDTOSchema);

const userLoginDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body);

    if (!isDTOValid)
        return res.status(400).send({
            errors: validateSchema.errors.map((err) => err.message),
        });

    next();
};

export default userLoginDTO;
