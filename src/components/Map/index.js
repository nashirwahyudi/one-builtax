// src/components/Map.tsx
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import { useEffect, useMemo } from 'react';
import building from './kenjeran.js'

export default function Map(props) {
  useEffect(() => {
    const map = L.map('map', {
      center: L.latLng(-7.218016, 112.771034),
      zoom: 15,
    });
    {
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);
    }
    L.geoJSON(building).addTo(map);
  }, [])

  return (
    <div style={{width: '100%', height: '100%'}} id="map">
    </div>
  )
}