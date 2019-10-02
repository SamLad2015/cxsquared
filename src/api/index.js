/**
* This is an example request. Create your own using best practises for
* handling asynchronous data fetching
**/

const apiUrl = "http://localhost:9988/api/";

export const getData = () => {
	return fetch(apiUrl + "vehicle" ,{
		method: 'get'
	}).then(response => response.json());
};

export const getVehicleData = (id) => {
	return fetch(apiUrl + "vehicle/" + id ,{
		method: 'get'
	}).then(response => response.json());
};

