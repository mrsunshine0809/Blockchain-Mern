import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "300px",
};

function Map({ latitude, longitude }) {
  const center = {
    lat: latitude,
    lng: longitude,
  };
    console.log(center, "center");
    const { isLoaded } = useJsApiLoader({
      id: "google-map-script",
      // id: "liquid-sylph-339314",
      googleMapsApiKey: "AIzaSyClDGpur3KtYNHpABdDTVTiAsdHcrt5nuA",
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds();
      map.fitBounds(bounds);
      setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
      setMap(null);
    }, []);

    return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{
          lat: latitude,
          lng: longitude,
        }}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    ) : (
      <></>
    );
}
export default React.memo(Map);