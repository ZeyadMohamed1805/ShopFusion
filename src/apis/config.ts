import axios from "axios";

const config = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export default config;
