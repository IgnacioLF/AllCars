import userTypes from "./user.types";

const INITIAL_STATE = {
	jwt: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case userTypes.ADD_JWT:
			return {
				...state,
				jwt: action.payload,
			};
		case userTypes.REMOVE_JWT:
			return {
				...state,
				jwt: null,
			};
		default:
			return state;
	}
};

export default userReducer;
