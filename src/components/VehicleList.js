import React, { Component } from 'react';
import { getData } from '../api';
import VehicleDetails from "./VehicleDetails";

export default
class VehicleList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			data: null
		}
	}

	componentDidMount() {
		getData().then(data => {
			this.setState({
				data
			})
		});
	}

	render() {
		if(this.state.data) {
			return(
			<ul className="list-group list-group-flush">
				{this.state.data.vehicles.map(el => (
					<li className="list-group-item" id={el.id} key={el.id}>
						<img src={el.media[0].url} alt={el.media[0].name} />
						<VehicleDetails id={el.id} name={el.media[0].name}></VehicleDetails>
					</li>
				))}
			</ul>);
	    }
		return (<h1>Loading...</h1>);
	}
}