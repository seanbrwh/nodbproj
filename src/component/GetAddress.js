import React, {Component} from 'react';
import Geocode from 'react-geocode';



class GetAddress extends Component {
    constructor(){
        super()
        this.state = {
            userLat: '',
            userLon: '',
            userA: '',
            address: [],
            LatLon: []
        }
    }
    updateLat(val){
        this.setState({
            userLat: val
        })
    }
    updateLon(val){
        this.setState({
            userLon: val
        })
    }
    updateAddress(val){
        this.setState({
            userA: val
        })
    }
    resAddress(){
        Geocode.fromLatLng(this.state.userLat, this.state.userLon).then(
        response => {
            const add = response.results[0].formatted_address;
            this.setState({
                address:add
            })
            },
            error => {
            console.error(error);
            }
        )
    }
    resLatLon(){
        Geocode.fromAddress(this.state.userA).then(
            response => {
            const { lat, lng } = response.results[0].geometry.location;
            this.setState({
                latLon: [`Lat:${lat}, Lon:${lng}`]
            })
            },
            error => {
            console.error(error);
            }
        );
    }
    
    render(){
        return(
            <div style={{boackground:'#000'}}>
                <div style={{marginTop:'20px'}}>
                    <input onChange={(e) => this.updateLat(e.target.value)} type="text" placeholder='Latitude'/> <input onChange={(e) => this.updateLon(e.target.value)} type="text" placeholder='Longitude'/> 
                    <button style={{marginLeft:'5px'}} onClick={() => this.resAddress()}>Get Address</button>
                    <div>{this.state.address}</div>
                </div>
                
                <br/>
                <div>
                    <input onChange={(e) => this.updateAddress(e.target.value)} type="text" placeholder='Address'/>
                    <button style={{marginLeft:'5px'}} onClick={()=> this.resLatLon()}>Get Lat Lon</button>
                    <div>{this.state.latLon}</div>
                </div>
                
            </div>
        )
    }
}

export default GetAddress;