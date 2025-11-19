import toast from "react-hot-toast";
import { GEOLOCATION_URL } from "../constants";
import axios from "axios";

export async function getLocation(ipAddress) {
    try {
        const response = await axios(`${GEOLOCATION_URL}&ipAddress=${ipAddress}`);
        const { data } = response;

        return data;
    } catch (err) {
        console.error(err);
        toast.error("Couldn't find a location with that IP!");
    }
}
