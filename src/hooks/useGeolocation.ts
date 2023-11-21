import { useState } from "react";

// TEMPORARY NEEDLESS

const useGeolocation = () => {
  const [isPending, setIsPending] = useState(true);
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState(null);

  const success = (position: GeolocationPosition) => {
    console.log(position.coords);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`;

    try {
      fetch(geoApiUrl)
        .then((res) => res.json())
        .then((data) => {
          setIsPending(false);
          setLocationData(data);
          setError(null);
          console.log("success: ", data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const failure = (err: GeolocationPositionError) => {
    console.log(err);
  };

  window.navigator.geolocation.getCurrentPosition(success, failure);

  return { isPending, locationData, error };
};

export default useGeolocation