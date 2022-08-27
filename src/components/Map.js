import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_TOKEN;

export default function Map({ cordinates }) {
	const [longitude, latitude] = cordinates;

	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(-118.243683);
	const [lat, setLat] = useState(34.052235);

	const [zoom, setZoom] = useState(9);
	useEffect(() => {
		// if (map.current) return; // initialize map only once

		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [longitude || lng, latitude || lat],
			zoom: zoom,
		});
	}, [longitude, latitude]);

	useEffect(() => {
		if (!map.current) return; // wait for map to initialize
		map.current.on('move', () => {
			setLng(map.current.getCenter().lng.toFixed(4));
			setLat(map.current.getCenter().lat.toFixed(4));
			setZoom(map.current.getZoom().toFixed(2));
		});
	});

	return (
		<div className="container">
			<div className="sidebar">
				Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
			</div>
			<div ref={mapContainer} className="map-container" />
		</div>
	);
}
