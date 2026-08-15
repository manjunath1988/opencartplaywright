# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndToEndTest.spec.ts >> Execute end to end test flow @end-to-end
- Location: tests\EndToEndTest.spec.ts:32:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - button "$ Currency " [ref=e7] [cursor=pointer]:
        - strong [ref=e8]: $
        - text: Currency
        - generic [ref=e9]: 
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "" [ref=e13] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
            - generic [ref=e14]: 
          - text: "123456789"
        - listitem [ref=e15]:
          - link " My Account" [ref=e16] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - generic [ref=e17]: 
            - text: My Account
        - listitem [ref=e19]:
          - link " Wish List (0)" [ref=e20] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - generic [ref=e21]: 
            - text: Wish List (0)
        - listitem [ref=e22]:
          - link " Shopping Cart" [ref=e23] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=checkout/cart
            - generic [ref=e24]: 
            - text: Shopping Cart
        - listitem [ref=e25]:
          - link " Checkout" [ref=e26] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=checkout/checkout
            - generic [ref=e27]: 
            - text: Checkout
  - banner [ref=e28]:
    - generic [ref=e30]:
      - heading "Qafox.com" [level=1] [ref=e33]:
        - link "Qafox.com" [ref=e34] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=common/home
      - generic [ref=e36]:
        - textbox "Search" [active] [ref=e37]: Macbook
        - button "" [ref=e39] [cursor=pointer]:
          - generic [ref=e40]: 
      - button " 0 item(s) - $0.00" [ref=e43] [cursor=pointer]:
        - generic [ref=e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=e46]:
    - generic: 
    - list [ref=e48]:
      - listitem [ref=e49]:
        - link "Desktops" [ref=e50] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=20
      - listitem [ref=e51]:
        - link "Laptops & Notebooks" [ref=e52] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=18
      - listitem [ref=e53]:
        - link "Components" [ref=e54] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=25
      - listitem [ref=e55]:
        - link "Tablets" [ref=e56] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=57
      - listitem [ref=e57]:
        - link "Software" [ref=e58] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=17
      - listitem [ref=e59]:
        - link "Phones & PDAs" [ref=e60] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=24
      - listitem [ref=e61]:
        - link "Cameras" [ref=e62] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=33
      - listitem [ref=e63]:
        - link "MP3 Players" [ref=e64] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=34
  - generic [ref=e65]:
    - list [ref=e66]:
      - listitem [ref=e67]:
        - link "" [ref=e68] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=common/home
          - generic [ref=e69]: 
      - listitem [ref=e70]:
        - link "Account" [ref=e71] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=account/account
    - generic [ref=e72]:
      - generic [ref=e73]:
        - heading "My Account" [level=2] [ref=e74]
        - list [ref=e75]:
          - listitem [ref=e76]:
            - link "Edit your account information" [ref=e77] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=account/edit
          - listitem [ref=e78]:
            - link "Change your password" [ref=e79] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=account/password
          - listitem [ref=e80]:
            - link "Modify your address book entries" [ref=e81] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=account/address
          - listitem [ref=e82]:
            - link "Modify your wish list" [ref=e83] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
        - heading "My Orders" [level=2] [ref=e84]
        - list [ref=e85]:
          - listitem [ref=e86]:
            - link "View your order history" [ref=e87] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=account/order
          - listitem [ref=e88]:
            - link "Downloads" [ref=e89] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=account/download
          - listitem [ref=e90]:
            - link "Your Reward Points" [ref=e91] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=account/reward
          - listitem [ref=e92]:
            - link "View your return requests" [ref=e93] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=account/return
          - listitem [ref=e94]:
            - link "Your Transactions" [ref=e95] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=account/transaction
          - listitem [ref=e96]:
            - link "Recurring payments" [ref=e97] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=account/recurring
        - heading "My Affiliate Account" [level=2] [ref=e98]
        - list [ref=e99]:
          - listitem [ref=e100]:
            - link "Register for an affiliate account" [ref=e101] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=account/affiliate/add
        - heading "Newsletter" [level=2] [ref=e102]
        - list [ref=e103]:
          - listitem [ref=e104]:
            - link "Subscribe / unsubscribe to newsletter" [ref=e105] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
      - complementary [ref=e106]:
        - generic [ref=e107]:
          - link "My Account" [ref=e108] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/account
          - link "Edit Account" [ref=e109] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/edit
          - link "Password" [ref=e110] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/password
          - link "Address Book" [ref=e111] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/address
          - link "Wish List" [ref=e112] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
          - link "Order History" [ref=e113] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/order
          - link "Downloads" [ref=e114] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/download
          - link "Recurring payments" [ref=e115] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/recurring
          - link "Reward Points" [ref=e116] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/reward
          - link "Returns" [ref=e117] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/return
          - link "Transactions" [ref=e118] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/transaction
          - link "Newsletter" [ref=e119] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
          - link "Logout" [ref=e120] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/logout
  - contentinfo [ref=e121]:
    - generic [ref=e122]:
      - generic [ref=e123]:
        - generic [ref=e124]:
          - heading "Information" [level=5] [ref=e125]
          - list [ref=e126]:
            - listitem [ref=e127]:
              - link "About Us" [ref=e128] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=4
            - listitem [ref=e129]:
              - link "Delivery Information" [ref=e130] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=6
            - listitem [ref=e131]:
              - link "Privacy Policy" [ref=e132] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=3
            - listitem [ref=e133]:
              - link "Terms & Conditions" [ref=e134] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=5
        - generic [ref=e135]:
          - heading "Customer Service" [level=5] [ref=e136]
          - list [ref=e137]:
            - listitem [ref=e138]:
              - link "Contact Us" [ref=e139] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
            - listitem [ref=e140]:
              - link "Returns" [ref=e141] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/return/add
            - listitem [ref=e142]:
              - link "Site Map" [ref=e143] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/sitemap
        - generic [ref=e144]:
          - heading "Extras" [level=5] [ref=e145]
          - list [ref=e146]:
            - listitem [ref=e147]:
              - link "Brands" [ref=e148] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/manufacturer
            - listitem [ref=e149]:
              - link "Gift Certificates" [ref=e150] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/voucher
            - listitem [ref=e151]:
              - link "Affiliate" [ref=e152] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=affiliate/login
            - listitem [ref=e153]:
              - link "Specials" [ref=e154] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/special
        - generic [ref=e155]:
          - heading "My Account" [level=5] [ref=e156]
          - list [ref=e157]:
            - listitem [ref=e158]:
              - link "My Account" [ref=e159] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - listitem [ref=e160]:
              - link "Order History" [ref=e161] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/order
            - listitem [ref=e162]:
              - link "Wish List" [ref=e163] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - listitem [ref=e164]:
              - link "Newsletter" [ref=e165] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
      - separator [ref=e166]
      - paragraph [ref=e167]:
        - text: Powered By
        - link "OpenCart" [ref=e168] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: Qafox.com © 2026
```

# Test source

```ts
  44  |    console.log(" Logout is Completed..!");
  45  | 
  46  |    //Step 3: Login with the Registered email.
  47  |    await performLogin(page, registeredEmail);
  48  |    console.log("Login is completed!");
  49  | 
  50  |    //Step 4: Search for the product and add it to the Cart.
  51  |    await addProductToCart(page);
  52  |    console.log("Product added to the Cart..!");
  53  | 
  54  |    //Step 5: Verify the content of the Shopping Cart.
  55  |    await verifyShoppingCart(page);
  56  |    console.log("Shopping Cart Verification is completed...");
  57  | 
  58  |    //Step 6: Perform checkout(Skipped for demo site)
  59  |    //await performCheckout(page);
  60  | 
  61  | });
  62  | 
  63  | 
  64  | //Function to register a new user account.
  65  | async function performRegistration(page: Page) {
  66  |    const homePage = new HomePage(page)
  67  |    await homePage.clickMyAccount();   //Click My Account Link.
  68  |    await homePage.clickRegister();    //Click Register option.
  69  | 
  70  |    const registrationPage = new RegistrationPage(page)
  71  | 
  72  |    //Fill in random user details.
  73  | 
  74  |    await registrationPage.setFirstName(RandomDataUtil.getFirstName());
  75  |    await registrationPage.setLastname(RandomDataUtil.getLastName());
  76  | 
  77  |    const email: string = RandomDataUtil.getEmail();
  78  |    await registrationPage.setEmail(email);
  79  | 
  80  |    await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber());
  81  | 
  82  |    await registrationPage.setPassword("Test@123");
  83  |    await registrationPage.setConfPswd("Test@123");
  84  | 
  85  |    await registrationPage.setPrivacyPolicy(); //Accept the privacy policy.
  86  |    await registrationPage.clickContinue(); //Submit the registration form.
  87  | 
  88  |    //Validate that registration was successfull. 
  89  |    const confirmationMsg = await registrationPage.CheckConfirmationMsg();
  90  |    expect(confirmationMsg).toContain('Your Account Has Been Created!');
  91  | 
  92  |    return email; //Return the email for later use in login.
  93  | 
  94  | }
  95  | 
  96  | //Function to logout the current user.
  97  | async function performLogout(page: Page) {
  98  |    const myAccountPage = new MyAccountPage(page);
  99  |    const logoutPage: LogoutPage = await myAccountPage.clickLogout();
  100 | 
  101 |    //Ensure the continue button is visible.
  102 |    expect(await logoutPage.isContinueButtonVisible()).toBe(true);
  103 | 
  104 |    //Click continue button and verify redirection to Home page.
  105 |    const homePage = await logoutPage.clickContinue();
  106 |    expect(await homePage.isHomePageExists()).toBe(true);
  107 | 
  108 | }
  109 | 
  110 | //Function to login using the registered email
  111 | 
  112 | async function performLogin(page: Page, email: string) {
  113 |    const config = new TestConfig();
  114 |    await page.goto(config.appUrl); //Reload home page.
  115 | 
  116 |    const homePage = new HomePage(page);
  117 |    await homePage.clickMyAccount();
  118 |    await homePage.clickLogin();
  119 | 
  120 |    const loginPage = new LoginPage(page);
  121 |    await loginPage.login(email, "Test@123"); //Use the registered credentials.
  122 | 
  123 |    //Verify login by checking My Account page.
  124 |    const myAccountPage = new MyAccountPage(page)
  125 |    expect(myAccountPage.isMyAccountPageExists()).toBeTruthy();
  126 | }
  127 | 
  128 | //Function to search for the Product and add it to cart.
  129 | 
  130 | async function addProductToCart(page: Page) {
  131 |    const homePage = new HomePage(page);
  132 | 
  133 |    const config = new TestConfig();
  134 | 
  135 |    const productName: string = config.productName;
  136 |    const productQuantity: string = config.productQuantity;
  137 | 
  138 |    await homePage.enterProductName(productName);
  139 |    await homePage.clickSearchButton(); //Click on search button.
  140 | 
  141 |    const searchResultsPage = new SearchResultsPage(page);
  142 | 
  143 |    //Validate search result page.
> 144 |    expect(await searchResultsPage.isSearchResultsPageExists()).toBeTruthy();
      |                                                                ^ Error: expect(received).toBeTruthy()
  145 | 
  146 |    //Validate that the desired product exist in the result
  147 |    expect(await searchResultsPage.isProductExists(productName)).toBeTruthy();
  148 | 
  149 |    //Select product and Set Quantity.
  150 |    const productPage = await searchResultsPage.selectProduct(productName);
  151 |    await productPage?.setQuantity(productQuantity);
  152 |    await productPage?.addToCart(); //Add product to shopping cart.
  153 | 
  154 |    await page.waitForTimeout(5000); //wait for simulate user delay.   
  155 | 
  156 |    //Confirm product was added.
  157 |    expect(await productPage?.isConfirmationMessageVisible()).toBe(true);
  158 | 
  159 | }
  160 | 
  161 | //Function to verify Shopping cart details.
  162 | 
  163 | async function verifyShoppingCart(page: Page) {
  164 |    const productPage = new ProductPage(page);
  165 | 
  166 |    //Navigate to Shopping cart from Product page.
  167 |    await productPage.clickItemsToNavigateToCart();
  168 |    const shoppingCartPage: ShoppingCartPage = await productPage.clickViewCart();
  169 | 
  170 |    console.log("Navigate to Shopping Cart!");
  171 | 
  172 |    const config = new TestConfig();
  173 | 
  174 |    //validate that total price is correct(based on config)
  175 |    expect(await shoppingCartPage.getTotalPrice()).toBe(config.totalPrice);
  176 | }
  177 | 
  178 | //Function to perform checkout
  179 | async function performCheckOut(page: Page) {
  180 |    //Checkout feature is not implemented since its a demo site.
  181 |    //Place your checkout flow if backend is available.
  182 | }
  183 | 
  184 | 
  185 | 
  186 | 
```