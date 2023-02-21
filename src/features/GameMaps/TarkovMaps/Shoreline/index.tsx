import React from 'react';

import LeafletMap from '../../../../components/LeafletMap';

export default function Shoreline() {
  return (
    <LeafletMap url="https://raw.githubusercontent.com/caioctt/tilemaps/main/Shoreline/{z}_{x}_{y}.png" />
  );
}
