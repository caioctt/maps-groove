import React from 'react';
import { LatLngTuple } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

function ComponentResize() {
  const map = useMap();

  setTimeout(() => {
    map.invalidateSize();
  }, 0);

  return null;
}

export default function Customs() {
  const position: LatLngTuple = [51.505, -0.09];

  return (
    <MapContainer
      style={{
        height: '100%',
        width: '100%',
      }}
      center={position}
      zoom={13}
      scrollWheelZoom
    >
      <ComponentResize />
      <TileLayer
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
