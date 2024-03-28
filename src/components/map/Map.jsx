import { MapContainer, TileLayer } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/Pin";

const Map = ({ items }) => {
  const position =
    items.length === 1
      ? [items[0].latitude, items[0].longitude]
      : [53.4862, -1.8904];
  const mapZoom = items.length === 1 ? 13 : 7;
  return (
    <MapContainer
      center={position}
      zoom={mapZoom}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
};

export default Map;
