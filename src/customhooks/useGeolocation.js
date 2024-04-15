import { useEffect, useState } from "react";

export function useGeolocation() {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState({});
  const { lat, lng } = position;
  const [error, setError] = useState(null);

  useEffect(function () {
    if (!navigator.geolocation) {
      setError("Your browser does not support geolocation");
    }
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }, []);

  return [isLoading, lat, lng, error];
}
