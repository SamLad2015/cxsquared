import React, { Component } from 'react';
import { getVehicleData } from '../api';

export default
class VehicleDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            details: null
        }
    }

    componentDidMount() {
        getVehicleData(this.props.id).then(details => {
            this.setState({
                details
            })
        });
    }

    render() {
        if(this.state.details) {
            return(
                <div className="vehicle-details">
                    <div><span className="title">{this.props.name}</span></div>
                    <div>From {this.state.details.price}</div>
                    <div className="description">{this.state.details.description}</div>
                </div>);
        }
        return (<div>Loading...</div>);
    }
}