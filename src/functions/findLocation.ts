import { geoApiResponse } from "../types/Types";

// auto find location
export const findLocation = (setLocationState: Function, handleOpenForecast: Function) => {
  setLocationState({
    locationLoading: true,
    locationData: null,
    locationError: null,
  });
  const success = (position: GeolocationPosition) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`;

    try {
      fetch(geoApiUrl)
        .then((res) => {
          if (!res.ok || res.status !== 200) {
            throw new Error("Cannot get data from server");
          }
          return res.json();
        })
        .then((data: geoApiResponse) => {
          const locatedPlace = {
            city: data.city,
            country: data.countryName,
          };
          setLocationState({
            locationLoading: false,
            locationData: locatedPlace,
            locationError: null,
          });
          localStorage.setItem("preferredCity", JSON.stringify({ city: locatedPlace.city, country: locatedPlace.country }));
          handleOpenForecast();
        });
    } catch (err) {
      console.log(err);
      setLocationState({
        locationLoading: false,
        locationData: null,
        locationError: "Oops...something went wrong",
      });
    }
  };
  const failure = (err: GeolocationPositionError) => {
    console.log(err);
    setLocationState({
      locationLoading: false,
      locationData: null,
      locationError: "Denied in location access",
    });
  };
  window.navigator.geolocation.getCurrentPosition(success, failure);
};
