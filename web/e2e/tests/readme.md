
# setup and run the tests
- Run the appcode in localhost by using the command ng serve
- Open another terminal and navigate to e2e/tests folder
- npm install
- npm run cy:open to run Cypress in headed mode
- npom run cy:run to run Cypress in headless chrome browser

# Observations
- There is no logical pattern/order the items in the list are showing up.  
- Throttling error not handled gracefully
- When no data returned from API must be handled gracefully on UI