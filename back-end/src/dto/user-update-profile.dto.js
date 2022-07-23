import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import addErrors from 'ajv-errors';
import { nameDTOSchema, emailDTOSchema } from '#Dto/dto-types.js';

const UpdateProfileDTOSchema = Type.Object(
    {
        name: nameDTOSchema,
        email: emailDTOSchema,
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties:
                'El formato del objeto del formulario de actualizar perfil no es válido',
        },
    }
);

const ajv = new Ajv({ allErrors: true });

addFormats(ajv, ['email']).addKeyword('kind').addKeyword('modifier');
addErrors(ajv);

const validateSchema = ajv.compile(UpdateProfileDTOSchema);

const userUpdateProfileDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body);

    if (!isDTOValid)
        return res.status(400).send({
            errors: validateSchema.errors.map((err) => err.message),
        });

    next();
};

export default userUpdateProfileDTO;
