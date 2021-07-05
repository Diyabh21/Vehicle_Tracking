import http from "../http-common";

class VehicleDataService {
  getLogs() {
    return http.get("/fetch_logs");
  }

  createLogs(data) {
    return http.post("/create_logs", data);
  }

}

export default new VehicleDataService();