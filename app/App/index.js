import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Navigation from "./config/Navigation";
import { persistor, store } from "./redux/createStore";

export default () => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Navigation />
			</PersistGate>
		</Provider>
	);
};
