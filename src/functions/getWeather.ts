import toast from "react-hot-toast";
import { LocationState } from "../types/Types";

export const getWeather = (locationState: LocationState, setWeatherState: Function) => {
  if (!locationState.locationData?.id) return;
  setWeatherState({
    loading: true,
    data: null,
    error: null,
  });
  try {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=a6a87d8563134d0bace175318232111&days=3&q=id:${locationState.locationData.id}`
    )
      .then((res) => {
        if (!res.ok || res.status !== 200) throw new Error("Cannot get data from server");
        return res.json();
      })
      .then((data) => {
        setWeatherState({
          loading: false,
          data: data,
          error: null,
        });
      });
  } catch (err) {
    console.log(err);
    setWeatherState({
      loading: false,
      data: null,
      error: "Error with getting data",
    });
    toast.error("Error with getting data from server");
    throw err;
  }
};
