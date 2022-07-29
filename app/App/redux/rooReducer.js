import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import userReducer from "./User/user.reducer";

export const rootReducer = combineReducers({
	user: userReducer,
});

const configStorage = {
	key: "root",
	storage: AsyncStorage,
	whitelist: ["user"],
};

export default persistReducer(configStorage, rootReducer);
