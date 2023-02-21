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
  const position: LatLngTuple = [0, 0];

  return (
    <div>
      <MapContainer
        style={{
          height: '94.5vh',
          width: '100vw',
        }}
        center={position}
        zoom={2.5}
        maxZoom={5}
        minZoom={2.5}
        maxBoundsViscosity={1}
        scrollWheelZoom
      >
        <ComponentResize />
        <TileLayer
          attribution="Map by RE3MR : reemr.se"
          url="https://raw.githubusercontent.com/caioctt/tilemaps/main/Shoreline/{z}_{x}_{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
