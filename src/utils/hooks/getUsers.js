import Vue from "vue";
import axios from "axios";
import "vue-toast-notification/dist/theme-bootstrap.css";

const getUsers = async () => {
  const response = await axios("https://api.escuelajs.co/api/v1/users")
    .then((res) => res.data)
    .catch((err) => {
      Vue.$toast.open({
        message: err.message,
        position: "bottom",
        type: "error",
      });
    });
  return response;
};

export { getUsers };
