import axios from "axios";

const requester = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default requester;