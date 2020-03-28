import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '95%',
  height: '30%'
};

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}  };
        onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true,
    lat: this.props.lat,
    lng: this.props.lng
  });

onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};
  render() {
   
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{
         lat:14.963082,
         lng: -91.8187687
        }}
      >
      <Marker
      onClick={this.onMarkerClick}
      name={'Kenyatta International Convention Centre'}
    />
    <InfoWindow
      marker={this.state.activeMarker}
      visible={this.state.showingInfoWindow}
      onClose={this.onClose}
    >
      <div>
        <h4>{this.state.selectedPlace.name}</h4>
      </div>
    </InfoWindow>
  </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyAHq0LVCpqevZehd8-mE8D183tbJNQQBt0")
})(MapContainer);
