import React, {Component} from 'react';
import axios from 'axios';
import toDate from 'normalize-date';

class IssInfo extends Component{
    constructor(){
        super()
        this.state = {
            location: [],
        }
    }
    getLocation(){
        axios.get('/api/open-notify').then(result =>{
            let {timestamp: time, iss_position: pos} = result.data[0]
            let {latitude:lat, longitude: lng} = pos;
            time = toDate(time * 1000);
            
            console.log(time, pos, lat, lng );
            this.setState({
                location: [
                    `Time: ${time}`,
                    `Latitude: ${lat} `,
                    `Longitude: ${lng} `
                ]
            })
            
        })
    }
    render(){
        return(
            <div>
                <button onClick={() => this.getLocation()} >Get ISS Location</button>
                {this.state.location}
            </div>

        )
    }
}

export default IssInfo