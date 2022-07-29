import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/createStore";
import Navigation from "./config/Navigation";

export default () => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Navigation />
			</PersistGate>
		</Provider>
	);
};
