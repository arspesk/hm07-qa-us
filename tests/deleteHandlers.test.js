// eslint-disable-next-line no-undef
const config = require('../config');
//Tests provided below are for "Deleting the kit" endpoint DELETE /api/v1/kits/:id (where :id, we using id of existing kit - 1), check API DOCS (instructions are in README.md) for any additional info

// Test for response status code 
test('status should be 200', async () => {
	let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
			method: 'DELETE',
		});
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});
// Test for response body validation, response should return boolean value "true" if user trying to delete existing kit
test('Response body should return "true"', async () => {
	let responseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
			method: 'DELETE',
		});
		responseBody = await response.json;
	} catch (error) {
		console.error(error);
	}
	expect(Boolean(responseBody)).toBe(true);
});
