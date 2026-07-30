/**
 * Test Case: Add product to cart.
 * 
 * Tags: @master @regression
 * 
 * Steps:
 * 1) Navigate to application URL.
 * 2) Enter an existing product name in the search box.
 * 3) Click the search button.
 * 4) Verify the product appears in the search results.
 * 5) Select the product.
 * 6) Set Quantity.
 * 7) Add the product to the cart.
 * 8) Verify the success message.
 * 
 */

import { test, expect } from '@playwright/test';
import { TestConfig } from '../test.config';
import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { ProductPage } from '../pages/ProductPage';

//Shared instances
let config: TestConfig;
let homePage: HomePage;
let searchResultsPage: SearchResultsPage;
let productPage: ProductPage;

test.beforeEach(async ({ page }) => {

    config = new TestConfig(); //Load test configuration.
    await page.goto(config.appUrl); //Step 1: Open Application URL.

    //Initialize page objects.
    homePage = new HomePage(page);
    searchResultsPage = new SearchResultsPage(page);
    productPage = new ProductPage(page);

});

test.afterEach(async ({ page }) => {
    await page.close(); //Optional but its a good practice to close like this.
});

test('Add Product to cart test @master @regression',async({page})=>{
    //Step 2: Enter product name in search box.
    await homePage.enterProductName(config.productName);

    //Step 3: Click the search button.
    await homePage.clickSearchButton();

    //Step 4: Verify the product appears in the search results.
    expect(await searchResultsPage.isSearchResultsPageExists()).toBe(true);

    //Step 5: Verify that the product exists in the results
    const productName=config.productName;
       expect(await searchResultsPage.isProductExists(productName)).toBeTruthy();

    //Step 6-7-8: Select Product -> Set Quantity -> Add to Cart -> Verify Success Confirmation.
    if(await searchResultsPage.isProductExists(productName))
    {
       await searchResultsPage.selectProduct(productName);
       await productPage.setQuantity(config.productQuantity); //Set Quantity.
       await productPage.addToCart(); //Add to Cart.

       //Step 8: Assert success message is visible.
       expect(await productPage.isConfirmationMessageVisible()).toBeTruthy();
    }
});






