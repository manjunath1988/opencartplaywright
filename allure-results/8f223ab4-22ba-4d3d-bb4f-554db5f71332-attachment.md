# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> User login test
- Location: tests\Login.spec.ts:41:7

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | /**
  2  |  * Test Case: Login with valid credentials.
  3  |  * 
  4  |  * Tags: @master @sanity @regression
  5  |  * 
  6  |  * Steps:
  7  |  * 1) Navigate to the application URL.
  8  |  * 2) Navigate to the Login page via Home page.
  9  |  * 3) Enter valid credentials and log in.
  10 |  * 4) Verify Successful login by checking 'My Account' page presence. 
  11 |  */
  12 | 
  13 | import {test, expect} from '@playwright/test';
  14 | import { HomePage } from '../pages/HomePage';
  15 | import { LoginPage } from '../pages/LoginPage';
  16 | import { MyAccountPage } from '../pages/MyAccountPage';
  17 | import { TestConfig} from '../test.config';
  18 | 
  19 | let config: TestConfig;
  20 | let homePage: HomePage;
  21 | let loginPage: LoginPage;
  22 | let myAccountPage: MyAccountPage;
  23 | 
  24 | //This hook runs before each test.
  25 | test.beforeEach(async({page})=>{
  26 |      config=new TestConfig(); // Load config (URL, credentials)
  27 |      await page.goto(config.appUrl); // Navigate to base URL
  28 | 
  29 |      //Initialize page objects.
  30 |      homePage=new HomePage(page);
  31 |      loginPage=new LoginPage(page);
  32 |      myAccountPage=new MyAccountPage(page);
  33 | })
  34 | 
  35 |   //Optional cleanup after each test.
  36 |   test.afterEach(async({page})=>{
  37 |     await page.close(); //Close browser tab(Good practice in local/dev run)
  38 |   })
  39 | 
  40 | 
  41 |   test('User login test',async()=>{
  42 | 
  43 |     //Navigate to login page via Home page.
  44 |     await homePage.clickMyAccount();
  45 |     await homePage.clickLogin();
  46 | 
  47 |     //Enter valid credentials to login.
  48 |     await loginPage.setEmail(config.email);
  49 |     await loginPage.setPassword(config.password);
  50 |     await loginPage.clickLogin();
  51 | 
  52 |     //alternatively
  53 |     //await loginPage.login(config.email,config.password);
  54 | 
  55 |     //Verify Successful login by checking 'My Account' page presence. 
  56 |     const isLoggedIn=await myAccountPage.isMyAccountPageExists();
> 57 |     expect(isLoggedIn).toBeTruthy();    
     |                        ^ Error: expect(received).toBeTruthy()
  58 | 
  59 |   })
  60 | 
```