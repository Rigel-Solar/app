import axios from "axios";

const reqRes = "https://reqres.in/api";

export const api = axios.create({
	baseURL: reqRes,
});
