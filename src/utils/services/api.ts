import axios from "axios";

const baseURL =
	"https://rigelsolar.azurewebsites.net/api";

export const api = axios.create({ baseURL });
