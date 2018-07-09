import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  constructor(props) {
    super()
    this.state = { 
    center: {
      lat: 40.2262583,
      lng: -111.6607527
    },
    zoom: 2,
    
    }
    
  };
  // showIssLoc(){
  //   let {latitude,longitude} = this.props;
  //   this.setState({
  //     centet:{
  //       lat: latitude,
  //       lng:longitude
  //     }
  //   })
  // }
  render() {
      
    return (
      <div style={{ height: '50vh', width: '50vw', margin: '0 auto' }} >
        {/* <button onClick={()=> this.showIssLoc()}>Show ISS</button> */}
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB3fhHmjrJ90lDmCuGiasHtpOPEVySHYjw'}}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
        <Marker
         lat={40.2262583}
         lng={-111.6607527}
         text={'Dev M'}
        />
        <Marker
          lat={this.props.latitude}
          lng={this.props.longitude}
          text={'ISS'}
        />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;