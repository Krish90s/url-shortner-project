import http from "./httpService";
import { shortnerUrl } from "../config.json";

const apiEndpoint = shortnerUrl + "/urlshort";

export function submitUrl(url) {
  return http.post(apiEndpoint, {
    longUrl: url.longUrl,
  });
}

export function getUrls() {
  return http.get(apiEndpoint);
}
