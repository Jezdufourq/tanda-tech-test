import axios from "axios";
import { authHeader } from "./auth-header";
const API_URL = "http://localhost:3000/api/v1/";
class OrganisationsService {
  organisations() {
    return axios.get(API_URL + "organisations", {
      headers: authHeader(),
    });
  }
  createOrganisation(name, hourlyRate) {
    return axios.post(
      API_URL + "organisations",
      { name: name, hourly_rate: hourlyRate },
      {
        headers: authHeader(),
      }
    );
  }
  editOrganisation(id, name, hourlyRate) {
    return axios.put(
      API_URL + "organisations/" + id,
      {
        name: name,
        hourly_rate: hourlyRate,
      },
      {
        headers: authHeader(),
      }
    );
  }
}
export default new OrganisationsService();
