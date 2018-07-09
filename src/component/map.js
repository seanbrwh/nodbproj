import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  constructor(props) {
    super()
    this.state = { 
    center: [40.2262583,-111.6607527],
    zoom: 2,
    markerToggle: false
    }
    
  };
  _onChange = (center,zoom) =>{
    this.setState({
      center: center,
      zoom:zoom
    })
  }
  showIssLoc(){
    let {latitude,longitude} = this.props;
    this.setState({
      center:[
        latitude,
        longitude
      ],
      markerToggle:true
    })
  }
  render() {
      console.log(this.state);
    return (
      <div style={{ height: '50vh', width: '50vw', margin: '0 auto' }} >
        <button style={{marginBottom:'20px'}} onClick={()=> this.showIssLoc()}>Show ISS</button>
        <GoogleMapReact
          _onChange={this._onChange}
          bootstrapURLKeys={{ key: 'AIzaSyB3fhHmjrJ90lDmCuGiasHtpOPEVySHYjw'}}
          // defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
          center={this.state.center}
        >
        <Marker
          lat={40.2262583}
          lng={-111.6607527}
          text={'Dev M'}
        />
        {
          this.state.markerToggle
          ?
        <Marker
          lat={this.props.latitude}
          lng={this.props.longitude}
          text={'ISS'}
        />
        :
        null
        }
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;