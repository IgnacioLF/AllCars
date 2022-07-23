import { Type } from '@sinclair/typebox';

export const nameDTOSchema = Type.String({
    minLength: 4,
    maxLength: 15,
    errorMessage: {
        minLength: 'El nombre debe de tener como minimo 4 carácteres',
        maxLength: 'El nombre no puede contener mas de 15 carácteres',
        type: 'El nombre debe de ser un String',
    },
});

export const emailDTOSchema = Type.String({
    format: 'email',
    errorMessage: {
        type: 'El email debe de ser un String',
        format: 'El formato del email no es válido',
    },
});

export const passwordSTOSchema = Type.String({
    format: 'password',
    minLength: 10,
    maxLength: 25,
    errorMessage: {
        minLength: 'El password debe tener al menos 10 caractes de longitud',
        maxLength:
            'El password debe tener como máximo 25 caracteres de longitud',
        type: 'El tipo la password no es válido, debe ser una String',
        format: 'El formato de la password no es válido, debe contener una mayuscula una minuscula y un número',
    },
});
