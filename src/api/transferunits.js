import axiosInstance from "./instance/axiosInstance";

export const getTransferRequests = async () => {
  try {
    const response = await axiosInstance.get("/transferunit");
    return await response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const updateStatus = async (id) => {
  try {
    // Send a PATCH request to the endpoint with the transfer request ID in the URL params
    const response = await axiosInstance.patch(`/transferunit/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error updating transfer request status:", error);
    throw error;
  }
};

export const store = async (data) => {
  try {
    const response = await axiosInstance.post("/transferunit/store", data);
    return await response.data;
  } catch (error) {
    console.log(error.message);
  }
};
