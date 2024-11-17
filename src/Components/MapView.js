import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const defaultLatLong = [20.5937, 78.9629]; 

const stateCoordinates = {
    "Andaman and Nicobar Islands": [11.667, 92.735],
    "Andhra Pradesh": [15.9129, 79.7400],
    "Arunachal Pradesh": [28.2180, 94.7278],
    "Assam": [26.2006, 92.9376],
    "Bihar": [25.0961, 85.3131],
    "Chandigarh": [30.7333, 76.7794],
    "Chhattisgarh": [21.2787, 81.8661],
    "Dadra and Nagar Haveli and Daman and Diu": [20.3974, 72.8328],
    "Delhi": [28.7041, 77.1025],
    "Goa": [15.2993, 74.1240],
    "Gujarat": [22.2587, 71.1924],
    "Haryana": [29.0588, 76.0856],
    "Himachal Pradesh": [31.1048, 77.1734],
    "Jammu and Kashmir": [33.2778, 75.3412],
    "Jharkhand": [23.6102, 85.2799],
    "Karnataka": [15.3173, 75.7138],
    "Kerala": [10.8505, 76.2711],
    "Ladakh": [34.1526, 77.5771],
    "Lakshadweep": [10.3280, 72.7846],
    "Madhya Pradesh": [22.9734, 78.6569],
    "Maharashtra": [19.7515, 75.7139],
    "Manipur": [24.6637, 93.9063],
    "Meghalaya": [25.4670, 91.3662],
    "Mizoram": [23.1645, 92.9376],
    "Nagaland": [26.1584, 94.5624],
    "Odisha": [20.9517, 85.0985],
    "Puducherry": [11.9416, 79.8083],
    "Punjab": [31.1471, 75.3412],
    "Rajasthan": [27.0238, 74.2179],
    "Sikkim": [27.5330, 88.5122],
    "Tamil Nadu": [11.1271, 78.6569],
    "Telangana": [18.1124, 79.0193],
    "Tripura": [23.9408, 91.9882],
    "Uttar Pradesh": [26.8467, 80.9462],
    "Uttarakhand": [30.0668, 79.0193],
    "West Bengal": [22.9868, 87.8550]
};

const MapView = ({ data }) => {
  return (
    <MapContainer center={defaultLatLong} zoom={5} style={{ height: '800px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png" />
      {data?.map((state) => {
        const position = stateCoordinates[state.state] || defaultLatLong;
        return (
          <Marker position={position} key={state.state}>
            <Popup>
              <strong>{state.state}</strong>
              <br />
              Active Cases: {state.active}
              <br />
              Recovered Cases: {state.recovered}
              <br />
              Deaths: {state.deaths}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default MapView;
