import Axios from "axios";

const auth_key = process.env.VUE_APP_AUTH_KEY;
let auth = JSON.parse(localStorage.getItem(auth_key));
const user = auth ? auth.user : "";
const jwt = auth ? auth.jwt : "";

const api_endpoint = process.env.VUE_APP_JOBSERM_ENDPOINT || "http://localhost:8000";

export default {
    isAuth() {
        return user !== "" && jwt !== "";
    },

    getApiHeader() {
        if (this.jwt !== "" && this.jwt !== undefined) {
            return {
                headers: {
                    Authorization: `Bearer ${this.jwt}`,
                },
            }
        }
        else {
            if (JSON.parse(localStorage.getItem(auth_key)) !== null) {
                this.jwt = JSON.parse(localStorage.getItem(auth_key)).jwt
            }
        }
    },

    async getUser() {
        let res = await Axios.get(`${api_endpoint}/api/users/me`, this.getApiHeader());
        let body = res.data;
        return body;
    },

    async getUserById(id) {
        let res = await Axios.get(`${api_endpoint}/api/users/${id}`, this.getApiHeader());
        let body = res.data;
        return body
    },

    async isAdmin() {
        let res = await Axios.get(`${api_endpoint}/api/auth/me`, this.getApiHeader());
        let body = res.data.isAdmin
        return body
    },

    getJwt() {
        return jwt;
    },

    async login({ email, password }) {
        
        try {
            let body = {
                email: email,
                password: password,
            };

            let res = await Axios.post(`${api_endpoint}/api/auth/login`, body);
            localStorage.setItem(auth_key, JSON.stringify(res.data));
            this.jwt = res.data.jwt;
            
            return {
                success: true,
                user: res.data.user,
                jwt: res.data.jwt,
            };

        } catch (error) {
            console.error(error);
            return {
                success: false,
                message: error.response.data.message[0].messages[0].message,
            };
        }
    },

    async register({name, email, password, lastname, phone, username}) {
        try {
            let body = {
                name: name,
                email: email,
                password: password,
                lastname: lastname,
                phone: phone,
                username: username
            };
            let res = await Axios.post(`${api_endpoint}/api/auth/register`, body);
            
            if (res.status === 200) {
                return {
                    success: true,
                    user: res.data.user,
                    jwt: res.data.jwt,
                };
            }
        } catch (error) {
            console.error(error);
            if (error.response.status === 400) {
                return {
                    success: false,
                    message: error.response.data.message[0].messages[0].message,
                };                
            }
        } 
    
    },

    logout() {
        localStorage.removeItem(auth_key);
        return {
            success: true,
            message: "Sign out successfully"
        };
    },

    

    
//?????????????????????????

}