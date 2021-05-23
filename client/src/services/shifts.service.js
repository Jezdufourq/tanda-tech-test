import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/";

class ShiftsService {
  getCurrentShiftsOnOrgId() {
    return axios.get(API_URL);
  }
}

export default new ShiftsService();
