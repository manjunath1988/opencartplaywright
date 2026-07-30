# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndToEndTest.spec.ts >> Execute end to end test flow @end-to-end
- Location: tests\EndToEndTest.spec.ts:32:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: undefined
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
        - textbox "Search" [ref=e37]: MacBook
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
        - link "Search" [ref=e71] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/search&search=MacBook
    - generic [ref=e73]:
      - heading "Search - MacBook" [level=1] [ref=e74]
      - generic [ref=e75]: Search Criteria
      - generic [ref=e76]:
        - textbox "Search Criteria" [ref=e78]:
          - /placeholder: Keywords
          - text: MacBook
        - combobox [ref=e80]:
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
        - generic [ref=e82] [cursor=pointer]:
          - checkbox "Search in subcategories" [disabled] [ref=e83]
          - text: Search in subcategories
      - paragraph [ref=e84]:
        - generic [ref=e85] [cursor=pointer]:
          - checkbox "Search in product descriptions" [ref=e86]
          - text: Search in product descriptions
      - button "Search" [ref=e87] [cursor=pointer]
      - heading "Products meeting the search criteria" [level=2] [ref=e88]
      - generic [ref=e89]:
        - generic [ref=e91]:
          - button "" [ref=e92] [cursor=pointer]:
            - generic [ref=e93]: 
          - button "" [ref=e94] [cursor=pointer]:
            - generic [ref=e95]: 
        - link "Product Compare (0)" [ref=e98] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/compare
        - generic [ref=e100]:
          - generic [ref=e101]: "Sort By:"
          - combobox "Sort By:" [ref=e102]:
            - option "Default" [selected]
            - option "Name (A - Z)"
            - option "Name (Z - A)"
            - option "Price (Low > High)"
            - option "Price (High > Low)"
            - option "Rating (Highest)"
            - option "Rating (Lowest)"
            - option "Model (A - Z)"
            - option "Model (Z - A)"
        - generic [ref=e104]:
          - generic [ref=e105]: "Show:"
          - combobox "Show:" [ref=e106]:
            - option "20" [selected]
            - option "25"
            - option "50"
            - option "75"
            - option "100"
      - generic [ref=e107]:
        - generic [ref=e109]:
          - link "MacBook" [ref=e111] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=43&search=MacBook
            - img "MacBook" [ref=e112]
          - generic [ref=e113]:
            - generic [ref=e114]:
              - heading "MacBook" [level=4] [ref=e115]:
                - link "MacBook" [ref=e116] [cursor=pointer]:
                  - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=43&search=MacBook
              - paragraph [ref=e117]: Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.16GHz, t..
              - paragraph [ref=e118]:
                - text: $602.00
                - generic [ref=e119]: Ex Tax:$500.00
            - generic [ref=e120]:
              - button " Add to Cart" [ref=e121] [cursor=pointer]:
                - generic [ref=e122]: 
                - text: Add to Cart
              - button "" [ref=e123] [cursor=pointer]:
                - generic [ref=e124]: 
              - button "" [ref=e125] [cursor=pointer]:
                - generic [ref=e126]: 
        - generic [ref=e128]:
          - link "MacBook Air" [ref=e130] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=44&search=MacBook
            - img "MacBook Air" [ref=e131]
          - generic [ref=e132]:
            - generic [ref=e133]:
              - heading "MacBook Air" [level=4] [ref=e134]:
                - link "MacBook Air" [ref=e135] [cursor=pointer]:
                  - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=44&search=MacBook
              - paragraph [ref=e136]: MacBook Air is ultrathin, ultraportable, and ultra unlike anything else. But you don’t lose in..
              - paragraph [ref=e137]:
                - text: $1,202.00
                - generic [ref=e138]: Ex Tax:$1,000.00
            - generic [ref=e139]:
              - button " Add to Cart" [ref=e140] [cursor=pointer]:
                - generic [ref=e141]: 
                - text: Add to Cart
              - button "" [ref=e142] [cursor=pointer]:
                - generic [ref=e143]: 
              - button "" [ref=e144] [cursor=pointer]:
                - generic [ref=e145]: 
        - generic [ref=e147]:
          - link "MacBook Pro" [ref=e149] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=45&search=MacBook
            - img "MacBook Pro" [ref=e150]
          - generic [ref=e151]:
            - generic [ref=e152]:
              - heading "MacBook Pro" [level=4] [ref=e153]:
                - link "MacBook Pro" [ref=e154] [cursor=pointer]:
                  - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=45&search=MacBook
              - paragraph [ref=e155]: Latest Intel mobile architecture Powered by the most advanced mobile processors from Intel, ..
              - paragraph [ref=e156]:
                - text: $2,000.00
                - generic [ref=e157]: Ex Tax:$2,000.00
            - generic [ref=e158]:
              - button " Add to Cart" [ref=e159] [cursor=pointer]:
                - generic [ref=e160]: 
                - text: Add to Cart
              - button "" [ref=e161] [cursor=pointer]:
                - generic [ref=e162]: 
              - button "" [ref=e163] [cursor=pointer]:
                - generic [ref=e164]: 
      - generic [ref=e167]: Showing 1 to 3 of 3 (1 Pages)
  - contentinfo [ref=e168]:
    - generic [ref=e169]:
      - generic [ref=e170]:
        - generic [ref=e171]:
          - heading "Information" [level=5] [ref=e172]
          - list [ref=e173]:
            - listitem [ref=e174]:
              - link "About Us" [ref=e175] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=4
            - listitem [ref=e176]:
              - link "Delivery Information" [ref=e177] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=6
            - listitem [ref=e178]:
              - link "Privacy Policy" [ref=e179] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=3
            - listitem [ref=e180]:
              - link "Terms & Conditions" [ref=e181] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=5
        - generic [ref=e182]:
          - heading "Customer Service" [level=5] [ref=e183]
          - list [ref=e184]:
            - listitem [ref=e185]:
              - link "Contact Us" [ref=e186] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
            - listitem [ref=e187]:
              - link "Returns" [ref=e188] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/return/add
            - listitem [ref=e189]:
              - link "Site Map" [ref=e190] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/sitemap
        - generic [ref=e191]:
          - heading "Extras" [level=5] [ref=e192]
          - list [ref=e193]:
            - listitem [ref=e194]:
              - link "Brands" [ref=e195] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/manufacturer
            - listitem [ref=e196]:
              - link "Gift Certificates" [ref=e197] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/voucher
            - listitem [ref=e198]:
              - link "Affiliate" [ref=e199] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=affiliate/login
            - listitem [ref=e200]:
              - link "Specials" [ref=e201] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/special
        - generic [ref=e202]:
          - heading "My Account" [level=5] [ref=e203]
          - list [ref=e204]:
            - listitem [ref=e205]:
              - link "My Account" [ref=e206] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - listitem [ref=e207]:
              - link "Order History" [ref=e208] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/order
            - listitem [ref=e209]:
              - link "Wish List" [ref=e210] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - listitem [ref=e211]:
              - link "Newsletter" [ref=e212] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
      - separator [ref=e213]
      - paragraph [ref=e214]:
        - text: Powered By
        - link "OpenCart" [ref=e215] [cursor=pointer]:
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
  157 |      await page.waitForTimeout(3000); //wait for simulate user delay.
  158 | 
  159 |      //Confirm product was added.
> 160 |      expect(await productPage?.isConfirmationMessageVisible()).toBeTruthy();
      |                                                                ^ Error: expect(received).toBeTruthy()
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