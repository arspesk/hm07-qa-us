// eslint-disable-next-line no-undef
const config = require('../config');
//Tests provided below are for "Get a list of warehouses" endpoint GET /api/v1/warehouses, check API DOCS (instructions are in README.md) for any additional info

// Test for response status code 
test('status should be 200', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});
// Test for response body validation, response should return Operation Hours of "Everything You Need Warehouse" (first warehouse in the response body), Operation Hours 7-23 accordingly
test('Warehouse "Everything You Need" opening at 7 and closing at 23', async () => {
	let operationHours;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		operationHours = await response.json();
	} catch (error) {
		console.error(error);
	}
	const startWorkingHours = operationHours[0]['workingHours']['start'];
    const endWorkingHours = operationHours[0]['workingHours']['end'];
	expect(startWorkingHours).toBe(7);
	expect(endWorkingHours).toBe(23);
});