import { Apod } from "../types";
import axios from 'axios';

const API_KEY = process.env.EXPO_PUBLIC_API_KEY || "DEMO_KEY";
const BASE_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

export const fetchApods = async (): Promise<Apod[]> => {
  try {
    const res =  await axios.get(
      `${BASE_URL}&start_date=2023-06-01&end_date=2023-07-17`
    );

    return await res.data;
  } catch (e) {
    console.log("Error fetching pictures: ", e.message);
    return [];
  }
};
