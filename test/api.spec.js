/**
 * Created by brett.hadley on 10/10/2016.
 */

const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require("chai-as-promised");
const getData = require('../src/api').getData;
const getVehicleData = require('../src/api').getVehicleData;
const server = require('../server');

chai.use(chaiAsPromised);

describe("getData example test", function() {
    before(() => {
        server.listen(9988);
    });
    it('should respond with an array of vehicles', () => {
        const vehiclesPromise = getData();

        return vehiclesPromise.then((response) => {
            expect(response.vehicles.length).to.equal(5);
            expect(response.vehicles[0].id).to.equal("xe");
        });
    });
    it('should respond with an array of vehicles', () => {
        const vehiclesPromise = getVehicleData("xe");

        return vehiclesPromise.then((data) => {
            expect(data.id).to.equal("xe");
            expect(data.price).to.equal("£30,000");
        });
    });
});
