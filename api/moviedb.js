import axios from "axios";

const KEY = "AIzaSyB1Wva76pLtACFNgrtIm_SDnLSnwDRgNig";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
