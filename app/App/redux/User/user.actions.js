import userTypes from "./user.types";

export const addJWT = (JWT) => ({
	type: userTypes.ADD_JWT,
	payload: JWT,
});

export const removeJWT = () => ({
	type: userTypes.REMOVE_JWT,
});
