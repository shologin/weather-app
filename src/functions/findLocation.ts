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

    // const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`;
    const geoApiUrl = `http://api.weatherapi.com/v1/search.json?key=a6a87d8563134d0bace175318232111&q=${latitude},${longitude}`;

    try {
      fetch(geoApiUrl)
        .then((res) => {
          if (!res.ok || res.status !== 200) {
            throw new Error("Cannot get data from server");
          }
          return res.json();
        })
        .then((data: geoApiResponse[]) => {
          const locatedPlace = {
            id: data[0].id,
            city: data[0].name,
            region: data[0].region,
            country: data[0].country,
          };

          setLocationState({
            locationLoading: false,
            locationData: locatedPlace,
            locationError: null,
          });
          localStorage.setItem(
            "preferredCity",
            JSON.stringify({
              id: locatedPlace.id,
              city: locatedPlace.city,
              region: locatedPlace.region,
              country: locatedPlace.country,
            })
          );
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
