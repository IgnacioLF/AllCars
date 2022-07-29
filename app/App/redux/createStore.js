/* eslint-disable import/no-named-as-default */
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./rooReducer";

export const midlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...midlewares));

export const persistor = persistStore(store);

export default {
	store,
	persistor,
};
