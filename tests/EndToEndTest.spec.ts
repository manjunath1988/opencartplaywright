/**
 * TestCase: End to End Test on Demo E-Commerce Application.
 * Purpose: 
 * This test simulates a complete user flow on an e-commerce site.
 * 
 * Steps: 
 * 1) Register a new Account.
 * 2) Logout after registration.
 * 3) Login with the same account.
 * 4) Search for the product and add it to the Shopping Cart.
 * 5) Veify cart contents.
 * 6) Attempt checkout (Disabled since feature is not available on demo site.)
 * 
 */

import { test, expect, Page } from '@playwright/test';
import { RegistrationPage } from '../pages/RegistrationPage';
import { HomePage } from '../pages/HomePage';
import { RandomDataUtil } from '../utils/randomDataGenerator';
import { TestConfig } from '../test.config';
import { LogoutPage } from '../pages/LogoutPage';
import { LoginPage } from '../pages/LoginPage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { ProductPage } from '../pages/ProductPage';
import { ShoppingCartPage } from '../pages/ShoppingCartPage';
import { CheckoutPage } from '../pages/CheckoutPage';



//This is the main test block that runs entire flow.
test('Execute end to end test flow @end-to-end', async ({ page }) => {
   const config = new TestConfig(); 

   //Navigate to the Application Home Page.
   await page.goto(config.appUrl);

   //Step 1: Register a new account and capture the generated email.
   let registeredEmail: string = await performRegistration(page);
   console.log(" Registration is completed..!");

   //Step 2: Logout after successful registration.
   await performLogout(page);
   console.log(" Logout is Completed..!");

   //Step 3: Login with the Registered email.
   await performLogin(page, registeredEmail);
   console.log("Login is completed!");

   //Step 4: Search for the product and add it to the Cart.
   await addProductToCart(page);
   console.log("Product added to the Cart..!");

   //Step 5: Verify the content of the Shopping Cart.
   await verifyShoppingCart(page);
   console.log("Shopping Cart Verification is completed...");

   //Step 6: Perform checkout(Skipped for demo site)
   //await performCheckout(page);

});


//Function to register a new user account.
async function performRegistration(page: Page) {
   const homePage = new HomePage(page)
   await homePage.clickMyAccount();   //Click My Account Link.
   await homePage.clickRegister();    //Click Register option.

   const registrationPage = new RegistrationPage(page)

   //Fill in random user details.

   await registrationPage.setFirstName(RandomDataUtil.getFirstName());
   await registrationPage.setLastname(RandomDataUtil.getLastName());

   const email: string = RandomDataUtil.getEmail();
   await registrationPage.setEmail(email);

   await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber());

   await registrationPage.setPassword("Test@123");
   await registrationPage.setConfPswd("Test@123");

   await registrationPage.setPrivacyPolicy(); //Accept the privacy policy.
   await registrationPage.clickContinue(); //Submit the registration form.

   //Validate that registration was successfull. 
   const confirmationMsg = await registrationPage.CheckConfirmationMsg();
   expect(confirmationMsg).toContain('Your Account Has Been Created!');

   return email; //Return the email for later use in login.

}

//Function to logout the current user.
async function performLogout(page: Page) {
   const myAccountPage = new MyAccountPage(page);
   const logoutPage: LogoutPage = await myAccountPage.clickLogout();

   //Ensure the continue button is visible.
   expect(await logoutPage.isContinueButtonVisible()).toBe(true);

   //Click continue button and verify redirection to Home page.
   const homePage = await logoutPage.clickContinue();
   expect(await homePage.isHomePageExists()).toBe(true);

}

//Function to login using the registered email

async function performLogin(page: Page, email: string) {
   const config = new TestConfig();
   await page.goto(config.appUrl); //Reload home page.

   const homePage = new HomePage(page);
   await homePage.clickMyAccount();
   await homePage.clickLogin();

   const loginPage = new LoginPage(page);
   await loginPage.login(email, "Test@123"); //Use the registered credentials.

   //Verify login by checking My Account page.
   const myAccountPage = new MyAccountPage(page)
   expect(myAccountPage.isMyAccountPageExists()).toBeTruthy();
}

//Function to search for the Product and add it to cart.

async function addProductToCart(page: Page) {
   const homePage = new HomePage(page);

   const config = new TestConfig();

   const productName: string = config.productName;
   const productQuantity: string = config.productQuantity;

   await homePage.enterProductName(productName);
   await homePage.clickSearchButton(); //Click on search button.

   const searchResultsPage = new SearchResultsPage(page);

   //Validate search result page.
   expect(await searchResultsPage.isSearchResultsPageExists()).toBeTruthy();

   //Validate that the desired product exist in the result
   expect(await searchResultsPage.isProductExists(productName)).toBeTruthy();

   //Select product and Set Quantity.
   const productPage = await searchResultsPage.selectProduct(productName);
   await productPage?.setQuantity(productQuantity);
   await productPage?.addToCart(); //Add product to shopping cart.

   await page.waitForTimeout(5000); //wait for simulate user delay.   

   //Confirm product was added.
   expect(await productPage?.isConfirmationMessageVisible()).toBe(true);

}

//Function to verify Shopping cart details.

async function verifyShoppingCart(page: Page) {
   const productPage = new ProductPage(page);

   //Navigate to Shopping cart from Product page.
   await productPage.clickItemsToNavigateToCart();
   const shoppingCartPage: ShoppingCartPage = await productPage.clickViewCart();

   console.log("Navigate to Shopping Cart!");

   const config = new TestConfig();

   //validate that total price is correct(based on config)
   expect(await shoppingCartPage.getTotalPrice()).toBe(config.totalPrice);
}

//Function to perform checkout
async function performCheckOut(page: Page) {
   //Checkout feature is not implemented since its a demo site.
   //Place your checkout flow if backend is available.
}



