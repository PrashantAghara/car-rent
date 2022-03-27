import { message } from "antd";
import axios from "axios";
export const getAllCars = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.get("/api/cars/getallcars");
    dispatch({ type: "GET_ALL_CARS", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
  } catch (err) {
    console.log(err);
    dispatch({ type: "LOADING", payload: false });
  }
};
export const addCar = (obj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.post("/api/cars/addcar", obj);
    // dispatch({ type: "GET_ALL_CARS", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
    message.success("New Car Added");
    setTimeout(() => {
      window.location.href = "/admin";
    }, 500);
  } catch (err) {
    console.log(err);
    dispatch({ type: "LOADING", payload: false });
  }
};
export const editCar = (obj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.post("/api/cars/editcar", obj);
    // dispatch({ type: "GET_ALL_CARS", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
    message.success("Car Details Updated");
    setTimeout(() => {
      window.location.href = "/admin";
    }, 500);
  } catch (err) {
    console.log(err);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const deleteCar = (obj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.post("/api/cars/deletecar", obj);
    // dispatch({ type: "GET_ALL_CARS", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
    message.success("Car Deleted");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  } catch (err) {
    console.log(err);
    dispatch({ type: "LOADING", payload: false });
  }
};
