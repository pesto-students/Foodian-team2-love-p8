import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useJsApiLoader, GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api';
import { Skeleton } from '@mui/material';
import { Link } from 'react-router-dom';
import './Delivery.css';
import { backendUrl } from '../../utils1/Url';
const center = { lat: 17.686, lng: 83.218 };

const DeliveryAcc = () => {
  const { orderId } = useParams(); 
  const navigate = useNavigate()
  const [currentLocation, setCurrentLocation] = useState(center);
  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
    libraries: ['places'],
  });

  async function calculateRoute() {
    if (!window.google || !window.google.maps) {
      console.error('Google Maps API not loaded');
      return;
    }

    const directionsService = new window.google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: currentLocation,
      destination: center,
      travelMode: window.google.maps.TravelMode.DRIVING,
    });

    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  const handleOrderDelivered = (orderId) => {
    // Make an HTTP request to update the order status to "delivered" in the backend
    fetch(`${backendUrl}/api/v1/item/order/${orderId}`, {
      method: 'PUT',
    
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: 'delivered' }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        // Handle the response data
        console.log(responseData)
        navigate('/delivered')
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  if (loadError) {
    return <div>Error loading Google Maps API.</div>;
  }

  if (!isLoaded) {
    return <Skeleton />;
  }

  return (
    <div className='maps-div'>
      {/* <div className='flexStart'>
        <BiLeftArrow />
        <h1>Order ID</h1>
      </div> */}

      <div className='maps' style={{ width: '100%', height: '100vh' }}>
        <GoogleMap
          center={currentLocation}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map) => setMap(map)}
        >
          <Marker position={currentLocation} />
          <Marker position={currentLocation} />
          <Marker position={currentLocation} />

          {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
          {/* Place any additional map components or overlays here */}
        </GoogleMap>

        {distance && <p>Distance: {distance}</p>}
        {duration && <p>Duration: {duration}</p>}
      </div>

      <div className="delivery-f"  style={{ position: 'absolute', top: '740px', zIndex: '1' }}>
                
        <button className='button' style={{ backgroundColor: 'green' }} onClick={()=>handleOrderDelivered(orderId)} >
          Order delivered
        </button>
      </div>
    </div>
  );
};

export default DeliveryAcc;
