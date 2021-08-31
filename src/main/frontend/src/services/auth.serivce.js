import http from "../http-common";

class AuthDataService {

    login(data) {
        return http.post("api/public/login", data);
    }
}

export default new AuthDataService();