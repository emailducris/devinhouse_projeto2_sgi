import React, { useState, useEffect, useMemo } from 'react';
import Header from '../../components/Header';
import './styles.css';
import marker from '../../assets/marker.png';
import Leaflet, { icon } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Map() {
  const iconMarker = useMemo(() => {
    return new Leaflet.Icon({
      iconUrl: marker,
      iconRetinaUrl: marker,
      popupAnchor: [-0, -0],
      iconSize: [40, 40],
    });
  }, []);

  const [enterprises, setEnterprises] = useState([]);

  useEffect(() => {
    async function getEnterprises() {
      try {
        const response = await fetch('http://localhost:3333/empresas');
        const responseJson = await response.json();
        setEnterprises(responseJson);
      } catch (error) {
        alert(
          'Ocorreu um erro na aplicação. Contate o administrador do sistema!'
        );
      }
    }
    getEnterprises();
  }, []);
  return (
    <div>
      <Header />
      <div className="container-map">
        <MapContainer
          center={[-27.5969, -48.5495]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {enterprises.map((item) => (
            <Marker
              icon={iconMarker}
              position={[item.latitude, item.longitude]}
            >
              <Popup>
                <p>Razão Social: {item.razao}</p>
                <p>Nome Fantasia: {item.fantasia}</p>
                <p>CNPJ: {item.cnpj}</p>
                <p>Email: {item.email}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
