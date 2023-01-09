import axios from 'axios';
const instance = axios.create({
	baseURL: "https://us-central1-replica-3c221.cloudfunctions.net/api",
});
export default instance;
// http://127.0.0.1:5001/replica-3c221/us-central1/api
// https://us-central1-replica-3c221.cloudfunctions.net/api