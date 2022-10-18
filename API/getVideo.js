import axios from "axios";
import { PATH_BACKEND } from "../Constants/Constants";

export default async function getVideo() {
  try {
    const result = await axios.get(`${PATH_BACKEND}`);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
