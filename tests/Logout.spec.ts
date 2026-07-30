/**
 * Testcase : User Logout
 * 
 * Tags: @master @regression
 * 
 * Steps:
 * 1) Navigate to the application URL
 * 2) Go to login page from Home Page
 * 3) Login with valid credentials.
 * 4) Verify 'My Account' Page.
 * 5) Click on Logout link. 
 * 6) Click on Continue button.
 * 7) Verify user is redirected to the Home Page. 
 */

import {test, expect} from '@playwright/test';
import {TestConfig} from '../test.config';
import { HomePage } from '../pages/HomePage';
import {LoginPage} from '../pages/LoginPage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { LogoutPage } from '../pages/LogoutPage';

//Declare shared variables.
let config: TestConfig;
let homePage: HomePage;
let loginPage: LoginPage;
let myAccountPage: MyAccountPage;
let logoutPage: LogoutPage;

//Setup before each test
test.beforeEach(async ({page})=>{
config=new TestConfig(); //Load test config
await page.goto(config.appUrl); //Step:1 Navigate to app URL.

//Initialize page objects
homePage = new HomePage(page);
loginPage = new LoginPage(page);
myAccountPage = new MyAccountPage(page);
//logoutPage = new LogoutPage(page);
});

//Optional cleanup after each test.
test.afterEach(async ({page})=>{

    await page.close(); // Close the browser tab (helps keep the test clean)
});


test('User logout test @master @regression',async({page})=>{
    //Step 2 : Navigate to login page.
    await homePage.clickMyAccount();
    await homePage.clickLogin();

    //Step 3: Perform login using valid credentials.
    await loginPage.login(config.email, config.password);

    //Step 4: Verify successful login.
    expect(await myAccountPage.isMyAccountPageExists()).toBeTruthy();

    //Step 5: Click Logout, which returns logout instance.
    logoutPage=await myAccountPage.clickLogout();

    //Step 6: Verify Continue button is visible, before clicking.
    expect(logoutPage.isContinueButtonVisible()).toBeTruthy();

    //Step 7: Click Continue and Verify redirection to Homepage.
     homePage=await logoutPage.clickContinue();
     expect(await homePage.isHomePageExists()).toBe(true);

});
    
    








