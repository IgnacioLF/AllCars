import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import { daytimeDTOSchema } from './dto-types.js';

const NewPhotoDTOSchema = Type.Object(
    {
        daytime: daytimeDTOSchema,
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties:
                'El formato del objeto para crear una foto nueva no es válido',
        },
    }
);

const ajv = new Ajv({ allErrors: true });
addErrors(ajv).addKeyword('kind').addKeyword('modifier');

const validateSchema = ajv.compile(NewPhotoDTOSchema);

const photoNewDTO = (req, res, next) => {
    const daytimeQuery = req.query.daytime;
    if (daytimeQuery === 'true' || daytimeQuery === 'false') {
        const daytime = daytimeQuery === 'true';

        const isDTOValid = validateSchema({ daytime });

        if (!isDTOValid)
            return res.status(400).send({
                errors: validateSchema.errors.map((err) => err.message),
            });

        next();
    } else {
        return res.status(400).send({
            errors: 'DAYTIME-FORMAT:Daytime debe ser true o false',
        });
    }
};

export default photoNewDTO;
