import axios from "axios";

const api = axios.create({
  baseURL: "https://dealer-service.k8s.fcalatam.com.br",
});

const post = (url: string) => api.post(url).then((response) => response.data);
const get = (url: string) => api.get(url).then((response) => response.data);

const DealerService = {
  postDealer(cityCode: string) {
    return post(`?cities=${cityCode}&brandName=JEEP`);
  },
  getCities(uf: string) {
    return get(`dealerws/influencearea/state/${uf}/city/?brandName=JEEP`);
  },
};

export default DealerService;
