# Sprint 7 project

1. VARIABLE NAMES

For the attcahed code we use a "camelCase" priciple for nameing variables for the api tests:

1) 'actualStatus' is used for ststus code checks in all endpoints tests
2) 'responseBody' is used for both deleteHandlers and putHandlears response body data validation tests
3) 'shippingWarehouse' is used for postHandlers response body data validation test
4) 'operationHours' is used for getHandlers response body data validation test, where:
- 'startWorkingHours' is used for warehouse openning hours
- 'endWorkingHours' is used for warehouse closing hours accordingly
5) 'requestBody' is used for a request body data to run tests for putHandlers and postHandlers

In the code 'let' used specificly for variables which could be changed during the coding and 'const' for a permanent fanctions, which unlikely to be changed.

2. COMMENTS

1) Every single test suit include a comment with explanation of endpoint and its functionality in "Urban Grocers" API. 

2) Every test also include a detailed explanation of a test purpose.

3. CONFIG.JS AND API URL

Config.js file is also attached for the convinience and API URL is specificly used to store a url for api servers, to use the further for the tests.

4. ADDITIONAL INFO AND DOCUMINTATION

For any additional information regarding the API endpoint and "Uber Grocers" API functionality, please refer to API DOCS documintation, which can be accessed through a temprory server url in a format:
(server url)/docs/
