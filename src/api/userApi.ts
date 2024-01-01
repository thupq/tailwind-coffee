import axios from "axios";
import { baseUrl } from "./baseUrl";

const UserApi = {
  get(reqBody: any) {
    return axios.post(`${baseUrl}/i/v1/users/search`, reqBody);
  }
};

export default UserApi;