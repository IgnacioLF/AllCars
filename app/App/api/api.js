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
				console.log("login res:", res.data);
				jwt = res.data.jwt;
				resolve();
			})
			.catch((err) => {
				console.log("login errors:", err.response.data.errors);
				reject(err.response.data.errors);
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
				console.log("register res:", res.data);
				resolve();
			})
			.catch((err) => {
				console.log("register errors:", err.response.data.errors);
				reject(err.response.data.errors);
			});
	});
};
