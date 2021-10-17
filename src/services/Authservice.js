import Axios from "axios";
import AuthUser from "../store/AuthUser";

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
            this.jwt = res.data.access_token;

            return {
                success: true,
                user: res.data.user,
                jwt: res.data.access_token,
            };

        } catch (e) {
            if (e.response.status === 409) {
                return {
                    success: false,
                    message: "บัญชีของคุณถูกระงับ โปรดติดต่อผู้แลระบบ"
                }
            
            } else {
                return {
                    success: false,
                    message: "กรุณาตรวจสอบอีเมลและรหัสผ่านอีกครั้ง"
                }
            }
        }
    },

    async register({name, email, password, password_confirmation,lastname, phone, username}) {
        try {
            let body = {
                name: name,
                email: email,
                password: password,
                password_confirmation: password_confirmation,
                lastname: lastname,
                phone: phone,
                username: username
            };

            console.log(body)
            
            let res = await Axios.post(`${api_endpoint}/api/auth/register`, body);
            //console.log(res);
            if (res.status === 201) {
                let autoLogin = await AuthUser.dispatch('login', body)
                console.log(autoLogin.jwt)
                
                return {
                    success: true,
                    user: res.data.user,
                    jwt: autoLogin.jwt,
                };
            }
        } catch (e) {
            //console.error(error);
            if (e.response.status === 400) {
                return {
                    success: false,
                    message: e.response.data
                };                
            }
        } 
    
    },

    logout() {
        localStorage.removeItem(auth_key);
        return {
            success: true,
        };
    },

}