import axios from "axios";

const baseUrl = "http://10.0.2.2:3000";

// temp jwt TODO movo to redux
let jwt = "";

// User Login
// post .../user/login {email,password} => jwt
export const userLoginAPI = (loginData) => {
	const loginUrl = `${baseUrl}/user/login`;

	return new Promise((resolve, reject) => {
		axios
			.post(loginUrl, loginData)
			.then((res) => {
				console.log("login Resp:", res.data);
				jwt = res.data.jwt;
				resolve();
			})
			.catch((err) => {
				console.log("login errors:", err.response.data.errors);
				reject(err.response.data.errors);
			});
	});
};
