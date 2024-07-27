import axios from "axios";
import ILoginService from "../domain/ILoginService";

export default class LoginService extends ILoginService {
    async login(username, password) {
        try {
            const response = await axios.post('/login', { username, password });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}