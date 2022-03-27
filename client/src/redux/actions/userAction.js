import axios from "axios";
import { message } from "antd";
export const userLogin = (obj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.post("/api/users/login", obj);
    localStorage.setItem("user", JSON.stringify(response.data));
    message.success("Login Success");
    setTimeout(() => {
      window.location.href = "/";
    }, 500);

    dispatch({ type: "LOADING", payload: false });
  } catch (err) {
    console.log(err);
    message.error("Something Went Wrong");
    dispatch({ type: "LOADING", payload: false });
  }
};

export const userRegister = (obj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.post("/api/users/register", obj);
    message.success("Registered Successfully");
    setTimeout(() => {
      window.location.href = "/login";
    }, 500);
    // localStorage.setItem("user", JSON.stringify(response.data));
    dispatch({ type: "LOADING", payload: false });
  } catch (err) {
    console.log(err);
    message.error("Something Went Wrong");
    dispatch({ type: "LOADING", payload: false });
  }
};
