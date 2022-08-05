import { Type } from '@sinclair/typebox';

export const nameDTOSchema = Type.String({
    minLength: 4,
    maxLength: 15,
    errorMessage: {
        minLength:
            'NAME-MINLENGHT:El nombre debe de tener como minimo 4 carácteres',
        maxLength:
            'NAME-MAXLENGHT:El nombre no puede contener mas de 15 carácteres',
        type: 'NAME-TYPE:El nombre debe de ser un String',
    },
});

export const emailDTOSchema = Type.String({
    format: 'email',
    errorMessage: {
        type: 'EMAIL-TYPE:El email debe de ser un String',
        format: 'EMAIL-FORMAT:El formato del email no es válido',
    },
});

export const passwordSTOSchema = Type.String({
    format: 'password',
    minLength: 10,
    maxLength: 25,
    errorMessage: {
        minLength:
            'PASSWORD-MINLENGHT:La contraseña debe tener al menos 10 caractes de longitud',
        maxLength:
            'PASSWORD-MAXLENGHT:La contraseña debe tener como máximo 25 caracteres de longitud',
        type: 'PASSWORD-TYPE:La contraseña no es válida, debe ser una String',
        format: 'PASSWORD-FORMAT:El formato de la contraseña no es válida, debe contener una mayuscula una minuscula y un número',
    },
});

export const newPasswordSTOSchema = Type.String({
    format: 'password',
    minLength: 10,
    maxLength: 25,
    errorMessage: {
        minLength:
            'NEWPASSWORD-MINLENGHT:La contraseña debe tener al menos 10 caractes de longitud',
        maxLength:
            'NEWPASSWORD-MAXLENGHT:La contraseña debe tener como máximo 25 caracteres de longitud',
        type: 'NEWPASSWORD-TYPE:La contraseña no es válida, debe ser una String',
        format: 'NEWPASSWORD-FORMAT:El formato de la contraseña no es válida, debe contener una mayuscula una minuscula y un número',
    },
});

export const carNameDTOSchema = Type.String({
    minLength: 4,
    maxLength: 25,
    errorMessage: {
        minLength:
            'NAME-MINLENGHT:El nombre debe de tener como minimo 4 carácteres',
        maxLength:
            'NAME-MAXLENGHT:El nombre no puede contener mas de 25 carácteres',
        type: 'NAME-TYPE:El nombre debe de ser un String',
    },
});

export const typeDTOSchema = Type.String({
    minLength: 3,
    maxLength: 15,
    errorMessage: {
        minLength:
            'TYPE-MINLENGHT:El tipo debe de tener como minimo 3 carácteres',
        maxLength:
            'TYPE-MAXLENGHT:El tipo no puede contener mas de 15 carácteres',
        type: 'TYPE-TYPE:El tipo debe de ser un String',
    },
});

export const priceDTOSchema = Type.String({
    minLength: 1,
    maxLength: 10,
    errorMessage: {
        minLength:
            'PRICE-MINLENGHT:El precio debe de tener como minimo 1 carácteres',
        maxLength:
            'PRICE-MAXLENGHT:El precio no puede contener mas de 10 carácteres',
        type: 'PRICE-TYPE:El precio debe de ser un String',
    },
});

export const descriptionDTOSchema = Type.String({
    minLength: 8,
    maxLength: 450,
    errorMessage: {
        minLength:
            'DESCRIPTION-MINLENGHT:La descripción debe de tener como minimo 8 carácteres',
        maxLength:
            'DESCRIPTION-MAXLENGHT:La descripción no puede contener mas de 450 carácteres',
        type: 'DESCRIPTION-TYPE:La descripción debe de ser un String',
    },
});

export const daytimeDTOSchema = Type.Boolean({
    errorMessage: {
        type: 'DAYTIME-TYPE:Daytime debe de ser un boolean',
        format: 'DAYTIME-FORMAT:El formato de daytime no es válido',
    },
});
