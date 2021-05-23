import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "sign-in", { email, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
          localStorage.setItem(
            "accessToken",
            JSON.stringify(response.data.accessToken)
          );
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
  }

  register(username, email, password) {
    return axios.post(API_URL + "sign-up", {
      username,
      email,
      password,
    });
  }
}

export default new AuthService();
