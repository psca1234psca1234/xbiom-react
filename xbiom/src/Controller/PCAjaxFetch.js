import axios from "axios";

export const fetch = async (url) => {
    debugger
  axios
    .get(url)
    .then((response) => {
        return response;
    })
    .catch((error) => {
        return error;
    });
};
