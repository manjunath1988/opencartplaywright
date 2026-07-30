/**
 * Test case: Product search.
 * 
 * Tags: @master @regression
 * 
 * Steps:
 * 1) Navigate to the application URL.
 * 2) Enter the product name in the search field.
 * 3) Click the search button.
 * 4) Verify if the product is displayed in the search results. * 
 */

import {test,expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { TestConfig } from '../test.config';

//Declare reusable variables.
let config: TestConfig;
let homePage: HomePage;
let searchResultsPage:SearchResultsPage;

//Playwright hook -Runs before each test.
test.beforeEach(async({page})=>{

    config=new TestConfig(); // Load configuration values like URL and Product name.
    await page.goto(config.appUrl); // Step 1: Navigate to the application URL.
    
    //Innitialize page objects.
    homePage=new HomePage(page);
    searchResultsPage=new SearchResultsPage(page);
});

//Playwright hook -Runs after each test.
test.afterEach(async({page})=>{
await page.close(); //Closes the browser tab after test.
});

test('Product search test @master @regression',async()=>{
       const productname=config.productName;

       //Step 2 & 3 : Enter productname and click on search.
       
       await homePage.enterProductName(config.productName);
       await homePage.clickSearchButton();

       //Step 4: Verify that the search result page is displayed.
       expect(await searchResultsPage.isSearchResultsPageExists()).toBe(true);

       //STep 5: Verify if searched product appears in results.
       const isProductFound=await searchResultsPage.isProductExists(productname);
       expect(isProductFound).toBeTruthy();

})



