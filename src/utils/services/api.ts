import axios from "axios";

const baseURL =
	"https://rigelsolarapi-dtdjdzdtfcfcdybm.brazilsouth-01.azurewebsites.net/api";

export const api = axios.create({ baseURL });
