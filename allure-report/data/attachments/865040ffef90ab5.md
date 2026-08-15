# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndToEndTest.spec.ts >> Execute end to end test flow @end-to-end
- Location: tests\EndToEndTest.spec.ts:32:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: undefined
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
        - textbox "Search" [ref=e37]: iphone
        - button "" [ref=e39] [cursor=pointer]:
          - generic [ref=e40]: 
      - generic [ref=e42]:
        - button " 1 item(s) - $123.20" [ref=e43] [cursor=pointer]:
          - generic [ref=e44]:
            - generic [ref=e45]: 
            - text: 1 item(s) - $123.20
        - text:   
  - navigation [ref=e47]:
    - generic: 
    - list [ref=e49]:
      - listitem [ref=e50]:
        - link "Desktops" [ref=e51] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=20
      - listitem [ref=e52]:
        - link "Laptops & Notebooks" [ref=e53] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=18
      - listitem [ref=e54]:
        - link "Components" [ref=e55] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=25
      - listitem [ref=e56]:
        - link "Tablets" [ref=e57] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=57
      - listitem [ref=e58]:
        - link "Software" [ref=e59] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=17
      - listitem [ref=e60]:
        - link "Phones & PDAs" [ref=e61] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=24
      - listitem [ref=e62]:
        - link "Cameras" [ref=e63] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=33
      - listitem [ref=e64]:
        - link "MP3 Players" [ref=e65] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=34
  - generic [ref=e66]:
    - list [ref=e67]:
      - listitem [ref=e68]:
        - link "" [ref=e69] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=common/home
          - generic [ref=e70]: 
      - listitem [ref=e71]:
        - link "Search" [ref=e72] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/search&search=iphone
    - generic [ref=e73]:
      - generic [ref=e74]: 
      - text: "Success: You have added"
      - link "iPhone" [ref=e75] [cursor=pointer]:
        - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=40
      - text: to your
      - link "shopping cart" [ref=e76] [cursor=pointer]:
        - /url: https://tutorialsninja.com/demo/index.php?route=checkout/cart
      - text: "!"
      - button "×" [ref=e77] [cursor=pointer]
    - generic [ref=e79]:
      - heading "Search - iphone" [level=1] [ref=e80]
      - generic [ref=e81]: Search Criteria
      - generic [ref=e82]:
        - textbox "Search Criteria" [ref=e84]:
          - /placeholder: Keywords
          - text: iphone
        - combobox [ref=e86]:
          - option "All Categories" [selected]
          - option "Desktops"
          - option "PC"
          - option "Mac"
          - option "Laptops & Notebooks"
          - option "Macs"
          - option "Windows"
          - option "Components"
          - option "Mice and Trackballs"
          - option "Monitors"
          - option "test 1"
          - option "test 2"
          - option "Printers"
          - option "Scanners"
          - option "Web Cameras"
          - option "Tablets"
          - option "Software"
          - option "Phones & PDAs"
          - option "Cameras"
          - option "MP3 Players"
          - option "test 11"
          - option "test 12"
          - option "test 15"
          - option "test 16"
          - option "test 17"
          - option "test 18"
          - option "test 19"
          - option "test 20"
          - option "test 25"
          - option "test 21"
          - option "test 22"
          - option "test 23"
          - option "test 24"
          - option "test 4"
          - option "test 5"
          - option "test 6"
          - option "test 7"
          - option "test 8"
          - option "test 9"
        - generic [ref=e88] [cursor=pointer]:
          - checkbox "Search in subcategories" [disabled] [ref=e89]
          - text: Search in subcategories
      - paragraph [ref=e90]:
        - generic [ref=e91] [cursor=pointer]:
          - checkbox "Search in product descriptions" [ref=e92]
          - text: Search in product descriptions
      - button "Search" [ref=e93] [cursor=pointer]
      - heading "Products meeting the search criteria" [level=2] [ref=e94]
      - generic [ref=e95]:
        - generic [ref=e97]:
          - button "" [ref=e98] [cursor=pointer]:
            - generic [ref=e99]: 
          - button "" [ref=e100] [cursor=pointer]:
            - generic [ref=e101]: 
        - link "Product Compare (0)" [ref=e104] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/compare
        - generic [ref=e106]:
          - generic [ref=e107]: "Sort By:"
          - combobox "Sort By:" [ref=e108]:
            - option "Default" [selected]
            - option "Name (A - Z)"
            - option "Name (Z - A)"
            - option "Price (Low > High)"
            - option "Price (High > Low)"
            - option "Rating (Highest)"
            - option "Rating (Lowest)"
            - option "Model (A - Z)"
            - option "Model (Z - A)"
        - generic [ref=e110]:
          - generic [ref=e111]: "Show:"
          - combobox "Show:" [ref=e112]:
            - option "20" [selected]
            - option "25"
            - option "50"
            - option "75"
            - option "100"
      - generic [ref=e115]:
        - link "iPhone" [ref=e117] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=40&search=iphone
          - img "iPhone" [ref=e118]
        - generic [ref=e119]:
          - generic [ref=e120]:
            - heading "iPhone" [level=4] [ref=e121]:
              - link "iPhone" [ref=e122] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=40&search=iphone
            - paragraph [ref=e123]: iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a name o..
            - paragraph [ref=e124]:
              - text: $123.20
              - generic [ref=e125]: Ex Tax:$101.00
          - generic [ref=e126]:
            - button " Add to Cart" [active] [ref=e127] [cursor=pointer]:
              - generic [ref=e128]: 
              - text: Add to Cart
            - button "" [ref=e129] [cursor=pointer]:
              - generic [ref=e130]: 
            - button "" [ref=e131] [cursor=pointer]:
              - generic [ref=e132]: 
      - generic [ref=e135]: Showing 1 to 1 of 1 (1 Pages)
  - contentinfo [ref=e136]:
    - generic [ref=e137]:
      - generic [ref=e138]:
        - generic [ref=e139]:
          - heading "Information" [level=5] [ref=e140]
          - list [ref=e141]:
            - listitem [ref=e142]:
              - link "About Us" [ref=e143] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=4
            - listitem [ref=e144]:
              - link "Delivery Information" [ref=e145] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=6
            - listitem [ref=e146]:
              - link "Privacy Policy" [ref=e147] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=3
            - listitem [ref=e148]:
              - link "Terms & Conditions" [ref=e149] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=5
        - generic [ref=e150]:
          - heading "Customer Service" [level=5] [ref=e151]
          - list [ref=e152]:
            - listitem [ref=e153]:
              - link "Contact Us" [ref=e154] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
            - listitem [ref=e155]:
              - link "Returns" [ref=e156] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/return/add
            - listitem [ref=e157]:
              - link "Site Map" [ref=e158] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/sitemap
        - generic [ref=e159]:
          - heading "Extras" [level=5] [ref=e160]
          - list [ref=e161]:
            - listitem [ref=e162]:
              - link "Brands" [ref=e163] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/manufacturer
            - listitem [ref=e164]:
              - link "Gift Certificates" [ref=e165] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/voucher
            - listitem [ref=e166]:
              - link "Affiliate" [ref=e167] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=affiliate/login
            - listitem [ref=e168]:
              - link "Specials" [ref=e169] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/special
        - generic [ref=e170]:
          - heading "My Account" [level=5] [ref=e171]
          - list [ref=e172]:
            - listitem [ref=e173]:
              - link "My Account" [ref=e174] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - listitem [ref=e175]:
              - link "Order History" [ref=e176] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/order
            - listitem [ref=e177]:
              - link "Wish List" [ref=e178] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - listitem [ref=e179]:
              - link "Newsletter" [ref=e180] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
      - separator [ref=e181]
      - paragraph [ref=e182]:
        - text: Powered By
        - link "OpenCart" [ref=e183] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: Qafox.com © 2026
```

# Test source

```ts
  60  | 
  61  | });
  62  | 
  63  | 
  64  | //Function to register a new user account.
  65  | async function performRegistration(page:Page)
  66  | {
  67  |    const homePage=new HomePage(page)
  68  |    await homePage.clickMyAccount();   //Click My Account Link.
  69  |    await homePage.clickRegister();    //Click Register option.
  70  | 
  71  |    const registrationPage=new RegistrationPage(page)
  72  | 
  73  |    //Fill in random user details.
  74  | 
  75  |    await registrationPage.setFirstName(RandomDataUtil.getFirstName());
  76  |    await registrationPage.setLastname(RandomDataUtil.getLastName());
  77  | 
  78  |    const email:string=RandomDataUtil.getEmail();
  79  |    await registrationPage.setEmail(email);
  80  | 
  81  |    await registrationPage.setTelephone(RandomDataUtil.getPhoneNumber());
  82  | 
  83  |    await registrationPage.setPassword("Test@123");
  84  |    await registrationPage.setConfPswd("Test@123");
  85  | 
  86  |    await registrationPage.setPrivacyPolicy(); //Accept the privacy policy.
  87  |    await registrationPage.clickContinue(); //Submit the registration form.
  88  | 
  89  |    //Validate that registration was successfull. 
  90  |    const confirmationMsg=await registrationPage.CheckConfirmationMsg();
  91  |    expect(confirmationMsg).toContain('Your Account Has Been Created!');
  92  | 
  93  |    return email; //Return the email for later use in login.
  94  | 
  95  | }
  96  | 
  97  | //Function to logout the current user.
  98  | async function performLogout(page:Page){
  99  |     const myAccountPage = new MyAccountPage(page);
  100 |     const logoutPage : LogoutPage=await myAccountPage.clickLogout();
  101 | 
  102 |     //Ensure the continue button is visible.
  103 |     expect(await logoutPage.isContinueButtonVisible()).toBe(true);
  104 | 
  105 |     //Click continue button and verify redirection to Home page.
  106 |     const homePage=await logoutPage.clickContinue();
  107 |     expect(await homePage.isHomePageExists()).toBe(true);
  108 | 
  109 | }
  110 | 
  111 | //Function to login using the registered email
  112 | 
  113 | async function performLogin(page:Page , email:string)
  114 | {
  115 |    const config=new TestConfig();
  116 |    await page.goto(config.appUrl); //Reload home page.
  117 | 
  118 |    const homePage=new HomePage(page);
  119 |    await homePage.clickMyAccount();
  120 |    await homePage.clickLogin();
  121 | 
  122 |    const loginPage=new LoginPage(page);
  123 |    await loginPage.login(email,"Test@123"); //Use the registered credentials.
  124 | 
  125 |    //Verify login by checking My Account page.
  126 |    const myAccountPage=new MyAccountPage(page)
  127 |    expect(myAccountPage.isMyAccountPageExists()).toBeTruthy();
  128 | }
  129 | 
  130 | //Function to search for the Product and add it to cart.
  131 | 
  132 | async function addProductToCart(page:Page)
  133 | {
  134 |     const homePage=new HomePage(page);
  135 |     
  136 |     const config=new TestConfig();
  137 | 
  138 |      const productName:string=config.productName;
  139 |      const productQuantity:string=config.productQuantity;
  140 | 
  141 |      await homePage.enterProductName(productName);
  142 |      await homePage.clickSearchButton(); //Click on search button.
  143 | 
  144 |      const searchResultsPage=new SearchResultsPage(page);
  145 | 
  146 |      //Validate search result page.
  147 |      expect(searchResultsPage.isSearchResultsPageExists()).toBeTruthy();
  148 | 
  149 |      //Validate that the desired product exist in the result
  150 |      expect(searchResultsPage.isProductExists(productName)).toBeTruthy();
  151 | 
  152 |      //Select product and Set Quantity.
  153 |      const productPage=await searchResultsPage.selectProduct(productName);
  154 |      await productPage?.setQuantity(productQuantity);
  155 |      await productPage?.addToCart(); //Add product to shopping cart.
  156 | 
  157 |      await page.waitForTimeout(5000); //wait for simulate user delay.   
  158 | 
  159 |      //Confirm product was added.
> 160 |      expect(await productPage?.isConfirmationMessageVisible()).toBe(true);
      |                                                                ^ Error: expect(received).toBe(expected) // Object.is equality
  161 | 
  162 | }
  163 | 
  164 | //Function to verify Shopping cart details.
  165 | 
  166 | async function verifyShoppingCart(page:Page)
  167 | {
  168 |    const productPage=new ProductPage(page);
  169 | 
  170 |    //Navigate to Shopping cart from Product page.
  171 |    await productPage.clickItemsToNavigateToCart();
  172 |    const shoppingCartPage:ShoppingCartPage=await productPage.clickViewCart();
  173 | 
  174 |    console.log("Navigate to Shopping Cart!");
  175 | 
  176 |    const config=new TestConfig();
  177 | 
  178 |    //validate that total price is correct(based on config)
  179 |    expect(await shoppingCartPage.getTotalPrice()).toBe(config.totalPrice);
  180 | }
  181 | 
  182 | //Function to perform checkout
  183 | async function performCheckOut(page:Page)
  184 | {
  185 |    //Checkout feature is not implemented since its a demo site.
  186 |    //Place your checkout flow if backend is available.
  187 | }
  188 | 
  189 | 
  190 | 
  191 | 
```