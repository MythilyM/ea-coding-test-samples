import { api } from "../support/apibuilder";
var getFestivalsResp;

context('Music Festivals Page', () => {

  before(() => {
     getFestivalsResp = api.getFestivalsApi();
    cy.visit('/festivals');
  })
  
  it('verify the api response', () => {
    cy.wait(getFestivalsResp).then((interception) => {
     assert.isNotNull(interception.response.body, 'API returns data');
     assert.equal(interception.response.statusCode, '200');
    })
  })

  xit('verify the UI loads the list of festivals', () => {
    //There is no logical order the items in the list are showing up. Test cannot be writtenm until the order has a pattern
  })
 

})