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
                <div className="list-group list-group-flush">
                    {this.state.details.description}
                    {this.state.details.price}
                </div>);
        }
        return (<div>Loading...</div>);
    }
}