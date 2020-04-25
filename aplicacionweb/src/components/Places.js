import React, {Component} from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import MapContainer from './GoogleMaps';
import ListEventos from './ListEventos';
import Map from './Map';
export default function Places (props) {
  const [address, setAddress] = React.useState("");
  const [valor]=React.useState("");

  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
    
  });
  
  const handleSelect = async dato => {
    const results = await geocodeByAddress(dato);
    const latLng = await getLatLng(results[0]);
    setAddress(dato);
    setCoordinates(latLng);
  };
  


  return (
    <div>
      
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            {/* <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p> */}
            
            <input  className="form-control" {...getInputProps({ placeholder: "Ingrese la direccion" })} />
         
           {props.datoLugar("Prueba")}
            <div>
              {loading ? <div>...loading </div> : null}
              
              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                };
                 
                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
           <div>
          
           </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
  
 
}