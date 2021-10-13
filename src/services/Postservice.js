import Axios from "axios";
import Authservice from "./Authservice";
let api_endpoint = process.env.VUE_APP_JOBSERM_ENDPOINT || "http://localhost:8000";

export default {
    async getAllPost() {
        try {
            let header = Authservice.getApiHeader();
            let res = await Axios.get(`${api_endpoint}/api/jobs`, header);

            // res.data.sort((x, y) => {
            //     return new Date(y.created_at) - new Date(x.created_at);
            // });

            return res;
        } catch (error) {
            console.error(error);
        }
    },

    async post(method, payload) {
        try {
            let header = Authservice.getApiHeader();
            let res = await Axios.post(`${api_endpoint}/api/${method}`, payload, header);
            return res;
        } catch (error) {
            console.error(error);
        }
    },
}