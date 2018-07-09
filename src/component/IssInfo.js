import React, {Component} from 'react';
import axios from 'axios';
import toDate from 'normalize-date';
import Map from './Map';
import GetAddress from './GetAddress'
import Geocode from 'react-geocode';
import CommentWin from './Comments/CommentWin'

class IssInfo extends Component{
    constructor(){
        super()
        this.state = {
            location: [],
            latitude: '',
            longitude: '',
            address: ''
        }
        this.getLocation = this.getLocation.bind(this)
    }
    
    getLocation(){
        axios.get('/api/open-notify').then(result =>{
            let {timestamp: time, iss_position: pos} = result.data[0]
            let {latitude:lat, longitude: lng} = pos;
            time = toDate(time * 1000);
            
            // console.log(time, pos, lat, lng );
            Geocode.fromLatLng(lat,lng).then(
                response => {
                const address = response.results[0].formatted_address;
                this.setState({
                    address:address
                })
                },
                error => {
                console.error(error);
                }
            )
            this.setState({
                location: [
                    `Time: ${time}`,
                    `Latitude: ${lat} `,
                    `Longitude: ${lng} `
                ],
                latitude: lat, 
                longitude: lng
            })
            
        })
    }
    render(){
        return(
            <div>
                <button onClick={() => this.getLocation()}  >Get ISS Location</button>
                <br/>{this.state.location}
                <Map
                latitude={this.state.latitude}
                longitude={this.state.longitude}
                >
                </Map>
                {/* {this.state.address} */}
                <GetAddress/>
                <CommentWin/>
            </div>

        )
    }
}

export default IssInfo