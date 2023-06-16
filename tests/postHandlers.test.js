// eslint-disable-next-line no-undef
const config = require('../config');
//Tests provided below are for "Creating a shopping cart" endpoint POST /api/v1/orders, check API DOCS (instructions are in README.md) for any additional info
const requestBody = {
		"productsList": [
			{
				"id": 1,
				"quantity": 2
			},
			{
				"id": 5,
				"quantity": 2
			},
			{
				"id": 3,
				"quantity": 1
			}
		]
}
// Test for response status code 
test('status should be 201', async () => {
	let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatus = response.status
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(201);
});
// Test for response body validation, response should return Shipping Warehouse as "Fresh Food" for a list of product ids, we selected in request body
test('Shipping WareHouse should be "Fresh Food" in response body', async () => {
	let shippingWarehouse;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		shippingWarehouse = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(shippingWarehouse['wareHouse']).toBe("Fresh Food");
});
