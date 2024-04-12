import axiosInstance from "./instance/axiosInstance";

export const getDummyOrders = async () => {
  try {
    const response = await axiosInstance.get("/dummyorders");
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
