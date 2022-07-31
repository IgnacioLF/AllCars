import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import {
    carNameDTOSchema,
    descriptionDTOSchema,
    priceDTOSchema,
    typeDTOSchema,
} from './dto-types.js';

const NewCarDTOSchema = Type.Object(
    {
        name: carNameDTOSchema,
        type: typeDTOSchema,
        price: priceDTOSchema,
        description: descriptionDTOSchema,
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties:
                'El formato del objeto de crear nuevo coche no es válido',
        },
    }
);

const ajv = new Ajv({ allErrors: true });
addErrors(ajv).addKeyword('kind').addKeyword('modifier');

const validateSchema = ajv.compile(NewCarDTOSchema);

const carNewCarDTO = (req, res, next) => {
    const isDTOValid = validateSchema(req.body);

    if (!isDTOValid)
        return res.status(400).send({
            errors: validateSchema.errors.map((err) => err.message),
        });

    next();
};

export default carNewCarDTO;
