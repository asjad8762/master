import React from "react";
import axios from "axios";

export default axios.create({
  baseURL: "https://review-2a168-default-rtdb.firebaseio.com/",
});
