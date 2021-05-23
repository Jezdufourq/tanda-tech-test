import axios from "axios";
import { authHeader } from "./auth-header";
const API_URL = "http://localhost:3000/api/v1/";

class ShiftsService {
  getCurrentShiftsOnOrgId(organisationId) {
    return axios.get(API_URL + "organisation/" + organisationId + "/shifts", {
      headers: authHeader(),
    });
  }
  createShift(startTime, endTime, breakLength, userId, organisationId) {
    return axios.post(
      API_URL + "/shifts",
      {
        start_time: startTime,
        end_time: endTime,
        break_length: breakLength,
        user_id: userId,
        organisation_id: organisationId,
      },
      {
        headers: authHeader(),
      }
    );
  }
}

export default new ShiftsService();
