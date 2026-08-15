# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddToCart.spec.ts >> Add Product to cart test @master @regression
- Location: tests\AddToCart.spec.ts:46:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: Promise {}
```

# Test source

```ts
  1  | /**
  2  |  * Test Case: Add product to cart.
  3  |  * 
  4  |  * Tags: @master @regression
  5  |  * 
  6  |  * Steps:
  7  |  * 1) Navigate to application URL.
  8  |  * 2) Enter an existing product name in the search box.
  9  |  * 3) Click the search button.
  10 |  * 4) Verify the product appears in the search results.
  11 |  * 5) Select the product.
  12 |  * 6) Set Quantity.
  13 |  * 7) Add the product to the cart.
  14 |  * 8) Verify the success message.
  15 |  * 
  16 |  */
  17 | 
  18 | import { test, expect } from '@playwright/test';
  19 | import { TestConfig } from '../test.config';
  20 | import { HomePage } from '../pages/HomePage';
  21 | import { SearchResultsPage } from '../pages/SearchResultsPage';
  22 | import { ProductPage } from '../pages/ProductPage';
  23 | 
  24 | //Shared instances
  25 | let config: TestConfig;
  26 | let homePage: HomePage;
  27 | let searchResultsPage: SearchResultsPage;
  28 | let productPage: ProductPage;
  29 | 
  30 | test.beforeEach(async ({ page }) => {
  31 | 
  32 |     config = new TestConfig(); //Load test configuration.
  33 |     await page.goto(config.appUrl); //Step 1: Open Application URL.
  34 | 
  35 |     //Initialize page objects.
  36 |     homePage = new HomePage(page);
  37 |     searchResultsPage = new SearchResultsPage(page);
  38 |     productPage = new ProductPage(page);
  39 | 
  40 | });
  41 | 
  42 | test.afterEach(async ({ page }) => {
  43 |     await page.close(); //Optional but its a good practice to close like this.
  44 | });
  45 | 
  46 | test('Add Product to cart test @master @regression',async({page})=>{
  47 |     //Step 2: Enter product name in search box.
  48 |     await homePage.enterProductName(config.productName);
  49 | 
  50 |     //Step 3: Click the search button.
  51 |     await homePage.clickSearchButton();
  52 | 
  53 |     //Step 4: Verify the product appears in the search results.
> 54 |     expect(searchResultsPage.isSearchResultsPageExists()).toBe(true);
     |                                                           ^ Error: expect(received).toBe(expected) // Object.is equality
  55 | 
  56 |     //Step 5: Verify that the product exists in the results
  57 |     const productName=config.productName;
  58 |        expect(await searchResultsPage.isProductExists(productName)).toBeTruthy();
  59 | 
  60 |     //Step 6-7-8: Select Product -> Set Quantity -> Add to Cart -> Verify Success Confirmation.
  61 |     if(await searchResultsPage.isProductExists(productName))
  62 |     {
  63 |        await searchResultsPage.selectProduct(productName);
  64 |        await productPage.setQuantity(config.productQuantity); //Set Quantity.
  65 |        await productPage.addToCart(); //Add to Cart.
  66 | 
  67 |        //Step 8: Assert success message is visible.
  68 |        expect(await productPage.isConfirmationMessageVisible()).toBeTruthy();
  69 |     }
  70 | });
  71 | 
  72 | 
  73 | 
  74 | 
  75 | 
  76 | 
  77 | 
```