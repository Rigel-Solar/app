import axios from "axios";

const reqRes = process.env.API_URL;

export const api = axios.create({
	baseURL: reqRes,
});
