import axios from "axios";
import { store } from "../redux/createStore";
import { addJWT } from "../redux/User/user.actions";

export const baseUrl = "http://10.0.2.2:3000";

// User Login
// post .../user/login {email,password} => jwt
export const userLoginAPI = (loginData) => {
	const loginUrl = `${baseUrl}/user/login`;
	return new Promise((resolve, reject) => {
		axios
			.post(loginUrl, loginData)
			.then((res) => {
				//	console.log("login res:", res.data);
				store.dispatch(addJWT(res.data.jwt));

				resolve();
			})
			.catch((err) => {
				if (err.response.data.errors) {
					//	console.log("login errors:", err.response.data.errors);
					reject(err.response.data.errors);
				} else {
					//	console.log("login errors:", err);
					reject(err);
				}
			});
	});
};

// User Register
// post .../user/register {name,email,password} => 200
export const userRegisterAPI = (registerData) => {
	const registerUrl = `${baseUrl}/user/register`;
	return new Promise((resolve, reject) => {
		axios
			.post(registerUrl, registerData)
			.then((res) => {
				//	console.log("register res:", res.data);
				resolve();
			})
			.catch((err) => {
				if (err.response.data.errors) {
					//	console.log("register errors:", err.response.data.errors);
					reject(err.response.data.errors);
				} else {
					//	console.log("register errors:", err);
					reject(err);
				}
			});
	});
};

// User Profile
// get .../user/profile auth-jwt => {name,email}
export const userProfileAPI = () => {
	const profileUrl = `${baseUrl}/user/profile`;
	const jwt = store.getState().user.jwt;
	const axiosConf = {
		headers: { Authorization: `Bearer ${jwt}` },
	};

	return new Promise((resolve, reject) => {
		axios
			.get(profileUrl, axiosConf)
			.then((res) => {
				//	console.log("profile res:", res.data);
				resolve(res.data);
			})
			.catch((err) => {
				if (err.response.data.errors) {
					//	console.log("profile errors:", err.response.data.errors);
					reject(err.response.data.errors);
				} else {
					//	console.log("profile errors:", err);
					reject(err);
				}
			});
	});
};

// User UpdateProfile
// patch .../user/update-profile auth-jwt + {name,email,password} => 200
export const userUpdateProfileAPI = (updateProfileData) => {
	const updateProfileUrl = `${baseUrl}/user/update-profile`;
	const jwt = store.getState().user.jwt;
	const axiosConf = {
		headers: { Authorization: `Bearer ${jwt}` },
	};

	return new Promise((resolve, reject) => {
		axios
			.patch(updateProfileUrl, updateProfileData, axiosConf)
			.then((res) => {
				//	console.log("update-profile res:", res.data);
				resolve(res.data);
			})
			.catch((err) => {
				if (err.response.data.errors) {
					//	console.log("update-profile errors:", err.response.data.errors);
					reject(err.response.data.errors);
				} else {
					//	console.log("update-profile errors:", err);
					reject(err);
				}
			});
	});
};

// User ChangePassword
// patch .../user/update-password auth-jwt + {oldPassword, newPassword} => 200
export const userUpdatePasswordAPI = (updatePasswordData) => {
	const updatePasswordUrl = `${baseUrl}/user/update-password`;
	const jwt = store.getState().user.jwt;
	const axiosConf = {
		headers: { Authorization: `Bearer ${jwt}` },
	};

	return new Promise((resolve, reject) => {
		axios
			.patch(updatePasswordUrl, updatePasswordData, axiosConf)
			.then((res) => {
				//	console.log("update-password res:", res.data);
				resolve(res.data);
			})
			.catch((err) => {
				if (err.response.data.errors) {
					//	console.log("update-password errors:", err.response.data.errors);
					reject(err.response.data.errors);
				} else {
					//	console.log("update-password errors:", err);
					reject(err);
				}
			});
	});
};

// Car all
// get .../car/all () => [{cars}...]
export const carAllAPI = () => {
	const allUrl = `${baseUrl}/car/all`;

	return new Promise((resolve, reject) => {
		axios
			.get(allUrl)
			.then((res) => {
				//	console.log("car-all res:", res.data);
				resolve(res.data);
			})
			.catch((err) => {
				if (err.response.data.errors) {
					//	console.log("car-all errors:", err.response.data.errors);
					reject(err.response.data.errors);
				} else {
					//	console.log("car-all errors:", err);
					reject(err);
				}
			});
	});
};

// Car car
// post .../car/car {id} => {car}
export const carCarAPI = (idCar) => {
	const carUrl = `${baseUrl}/car/car`;

	return new Promise((resolve, reject) => {
		axios
			.post(carUrl, idCar)
			.then((res) => {
				//	console.log("car-car res:", res.data);
				resolve(res.data);
			})
			.catch((err) => {
				if (err.response.data.errors) {
					//	console.log("car-car errors:", err.response.data.errors);
					reject(err.response.data.errors);
				} else {
					//	console.log("car-car errors:", err);
					reject(err);
				}
			});
	});
};

// Photo allday
// get .../photo/allday () => [{photo}...]
export const photoAlldayAPI = () => {
	const alldayUrl = `${baseUrl}/photo/allday`;

	return new Promise((resolve, reject) => {
		axios
			.get(alldayUrl)
			.then((res) => {
				//	console.log("photo-allday res:", res.data);
				resolve(res.data);
			})
			.catch((err) => {
				if (err.response.data.errors) {
					//	console.log("photo-allday errors:", err.response.data.errors);
					reject(err.response.data.errors);
				} else {
					//	console.log("photo-allday errors:", err);
					reject(err);
				}
			});
	});
};

// Photo allnight
// get .../photo/allnight () => [{photo}...]
export const photoAllnightAPI = () => {
	const allnightUrl = `${baseUrl}/photo/allnight`;

	return new Promise((resolve, reject) => {
		axios
			.get(allnightUrl)
			.then((res) => {
				//	console.log("photo-allnight res:", res.data);
				resolve(res.data);
			})
			.catch((err) => {
				if (err.response.data.errors) {
					console.log("photo-allnight errors:", err.response.data.errors);
					reject(err.response.data.errors);
				} else {
					//	console.log("photo-allnight errors:", err);
					reject(err);
				}
			});
	});
};

// User favorites add
// patch .../user/favorites/add auth-jwt + {id} => 200
export const userFavoritesAddAPI = (id) => {
	const favoritesAddUrl = `${baseUrl}/user/favorites/add`;
	const jwt = store.getState().user.jwt;
	const axiosConf = {
		headers: { Authorization: `Bearer ${jwt}` },
	};

	return new Promise((resolve, reject) => {
		axios
			.patch(favoritesAddUrl, id, axiosConf)
			.then((res) => {
				//	console.log("user-favorites-add res:", res.data);
				resolve(res.data);
			})
			.catch((err) => {
				if (err.response.data.errors) {
					//	console.log("user-favorites-add errors:", err.response.data.errors);
					reject(err.response.data.errors);
				} else {
					//	console.log("user-favorites-add errors:", err);
					reject(err);
				}
			});
	});
};

// User favorites remove
// delete .../user/favorites/remove auth-jwt + {id} => 200
export const userFavoritesRemoveAPI = (id) => {
	const favoritesRemoveUrl = `${baseUrl}/user/favorites/remove`;
	const jwt = store.getState().user.jwt;
	const axiosConf = {
		headers: { Authorization: `Bearer ${jwt}` },
		data: {
			id,
		},
	};

	return new Promise((resolve, reject) => {
		axios
			.delete(favoritesRemoveUrl, axiosConf)
			.then((res) => {
				//	console.log("user-favorites-remove res:", res.data);
				resolve(res.data);
			})
			.catch((err) => {
				if (err.response.data.errors) {
					/* console.log(
						"user-favorites-remove errors:",
						err.response.data.errors
					); */
					reject(err.response.data.errors);
				} else {
					// console.log("user-favorites-remove errors:", err);
					reject(err);
				}
			});
	});
};

// User favorites all
// get .../user/favorites/all auth-jwt => [{favorites}...]
export const userFavoritesAllAPI = () => {
	const favoritesAllUrl = `${baseUrl}/user/favorites/all`;
	const jwt = store.getState().user.jwt;
	const axiosConf = {
		headers: { Authorization: `Bearer ${jwt}` },
	};

	return new Promise((resolve, reject) => {
		axios
			.get(favoritesAllUrl, axiosConf)
			.then((res) => {
				// console.log("user-favorites-all res:", res.data);
				resolve(res.data);
			})
			.catch((err) => {
				if (err.response.data.errors) {
					//	console.log("user-favorites-all errors:", err.response.data.errors);
					reject(err.response.data.errors);
				} else {
					//	console.log("user-favorites-all errors:", err);
					reject(err);
				}
			});
	});
};

// User favorites check
// post .../user/favorites/check auth-jwt + {id} => {isFav}
export const userFavoritesCheckAPI = (id) => {
	const favoritesCheckUrl = `${baseUrl}/user/favorites/check`;
	const jwt = store.getState().user.jwt;
	const axiosConf = {
		headers: { Authorization: `Bearer ${jwt}` },
	};

	return new Promise((resolve, reject) => {
		axios
			.post(favoritesCheckUrl, id, axiosConf)
			.then((res) => {
				//	console.log("user-favorites-check res:", res.data);
				resolve(res.data);
			})
			.catch((err) => {
				if (err.response.data.errors) {
					//	console.log("user-favorites-check errors:", err.response.data.errors);
					reject(err.response.data.errors);
				} else {
					//	console.log("user-favorites-check errors:", err);
					reject(err);
				}
			});
	});
};
