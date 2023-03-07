import axios from "axios";

export const leaverRequest = async ({ userName, userPhone, course }) => {
  try {
    const data = await axios.post("http://localhost:3000/api/leave-request", {
      userPhone,
      userName,
      course,
    });
    return data;
  } catch (error) {
    return error;
  }
};
