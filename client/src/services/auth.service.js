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

  resetPassword(email, passwordCode, newPassword) {
    return axios.put(API_URL + "reset-password", {
      email: email,
      password_reset_answer: passwordCode,
      updated_password: newPassword,
    });
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
  }

  register(name, email, password, passwordCode) {
    return axios.post(API_URL + "sign-up", {
      name: name,
      email: email,
      password: password,
      password_reset_answer: passwordCode,
    });
  }
}

export default new AuthService();
