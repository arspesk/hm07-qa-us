// eslint-disable-next-line no-undef
const config = require('../config');
//Tests provided below are for "Grocery item price change" endpoint PUT /api/v1/products/:id (where :id we use an existing kit 1), check API DOCS (instructions are in README.md) for any additional info
const requestBody = {
	"price": 175
}
// Test for response status code 
test('status should be 200', async () => {
	let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/1`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});
// Test for response body validation, response should return boolean value "true" if user trying  to change a price of products from existing grocery kit
test('Response Body should return "true"', async () => {
	let responseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/1`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		responseBody = await response.json;
	} catch (error) {
		console.error(error);
	}
	expect(Boolean(responseBody)).toBe(true);
});
