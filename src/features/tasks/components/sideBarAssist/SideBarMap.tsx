import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

// import { Container } from './styles';

interface IProps {
  gpsLat: number;
  gpsLong: number;
}

const SideBarMap: React.FC<IProps> = ({ gpsLat, gpsLong }) => {
  const position: [number, number] = [gpsLat, gpsLong];

  return <MapContainer center={position} zoom={13}></MapContainer>;
};

export default SideBarMap;
