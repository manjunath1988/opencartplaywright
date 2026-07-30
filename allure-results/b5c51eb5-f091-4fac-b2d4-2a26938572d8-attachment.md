# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegistration.spec.ts >> Account registration test
- Location: tests\AccountRegistration.spec.ts:20:5

# Error details

```
TypeError: received is not iterable
```

```
Error: locator.textContent: Test ended.
Call log:
  - waiting for locator('h1:has-text(\'Your Account Has Been Created!\')')

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
        - textbox "Search" [ref=e37]
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
      - listitem [ref=e72]:
        - link "Register" [ref=e73] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=account/register
    - generic [ref=e74]:
      - generic [ref=e75]: 
      - text: "Warning: You must agree to the Privacy Policy!"
    - generic [ref=e76]:
      - generic [ref=e77]:
        - heading "Register Account" [level=1] [ref=e78]
        - paragraph [ref=e79]:
          - text: If you already have an account with us, please login at the
          - link "login page" [ref=e80] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/login
          - text: .
        - generic [ref=e81]:
          - group "Your Personal Details" [ref=e82]:
            - generic [ref=e83]: Your Personal Details
            - text: "*"
            - generic [ref=e84]:
              - generic [ref=e85]: "* First Name"
              - textbox "* First Name" [ref=e87]:
                - /placeholder: First Name
                - text: Lester
            - generic [ref=e88]:
              - generic [ref=e89]: "* Last Name"
              - textbox "* Last Name" [ref=e91]:
                - /placeholder: Last Name
                - text: Towne-Williamson
            - generic [ref=e92]:
              - generic [ref=e93]: "* E-Mail"
              - textbox "* E-Mail" [ref=e95]:
                - /placeholder: E-Mail
                - text: Beth65@yahoo.com
            - generic [ref=e96]:
              - generic [ref=e97]: "* Telephone"
              - textbox "* Telephone" [ref=e99]:
                - /placeholder: Telephone
                - text: (282) 317-4693
          - group "Your Password" [ref=e100]:
            - generic [ref=e101]: Your Password
            - generic [ref=e102]:
              - generic [ref=e103]: "* Password"
              - generic [ref=e104]:
                - textbox "* Password" [ref=e105]:
                  - /placeholder: Password
                - generic [ref=e106]: Password must be between 4 and 20 characters!
            - generic [ref=e107]:
              - generic [ref=e108]: "* Password Confirm"
              - generic [ref=e109]:
                - textbox "* Password Confirm" [ref=e110]:
                  - /placeholder: Password Confirm
                  - text: lJ6W8IhEaiYPcvxlJ6W8IhEaiYPcvx
                - generic [ref=e111]: Password confirmation does not match password!
          - group "Newsletter" [ref=e112]:
            - generic [ref=e113]: Newsletter
            - generic [ref=e114]:
              - generic [ref=e115]: Subscribe
              - generic [ref=e116]:
                - generic [ref=e117] [cursor=pointer]:
                  - radio "Yes" [ref=e118]
                  - text: "Yes"
                - generic [ref=e119] [cursor=pointer]:
                  - radio "No" [checked] [ref=e120]
                  - text: "No"
          - generic [ref=e121]:
            - text: I have read and agree to the
            - link "Privacy Policy" [ref=e122] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=information/information/agree&information_id=3
            - checkbox [ref=e123]
            - button "Continue" [ref=e124] [cursor=pointer]
      - complementary [ref=e125]:
        - generic [ref=e126]:
          - link "Login" [ref=e127] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/login
          - link "Register" [ref=e128] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/register
          - link "Forgotten Password" [ref=e129] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/forgotten
          - link "My Account" [ref=e130] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/account
          - link "Address Book" [ref=e131] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/address
          - link "Wish List" [ref=e132] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
          - link "Order History" [ref=e133] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/order
          - link "Downloads" [ref=e134] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/download
          - link "Recurring payments" [ref=e135] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/recurring
          - link "Reward Points" [ref=e136] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/reward
          - link "Returns" [ref=e137] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/return
          - link "Transactions" [ref=e138] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/transaction
          - link "Newsletter" [ref=e139] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
  - contentinfo [ref=e140]:
    - generic [ref=e141]:
      - generic [ref=e142]:
        - generic [ref=e143]:
          - heading "Information" [level=5] [ref=e144]
          - list [ref=e145]:
            - listitem [ref=e146]:
              - link "About Us" [ref=e147] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=4
            - listitem [ref=e148]:
              - link "Delivery Information" [ref=e149] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=6
            - listitem [ref=e150]:
              - link "Privacy Policy" [ref=e151] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=3
            - listitem [ref=e152]:
              - link "Terms & Conditions" [ref=e153] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=5
        - generic [ref=e154]:
          - heading "Customer Service" [level=5] [ref=e155]
          - list [ref=e156]:
            - listitem [ref=e157]:
              - link "Contact Us" [ref=e158] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
            - listitem [ref=e159]:
              - link "Returns" [ref=e160] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/return/add
            - listitem [ref=e161]:
              - link "Site Map" [ref=e162] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/sitemap
        - generic [ref=e163]:
          - heading "Extras" [level=5] [ref=e164]
          - list [ref=e165]:
            - listitem [ref=e166]:
              - link "Brands" [ref=e167] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/manufacturer
            - listitem [ref=e168]:
              - link "Gift Certificates" [ref=e169] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/voucher
            - listitem [ref=e170]:
              - link "Affiliate" [ref=e171] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=affiliate/login
            - listitem [ref=e172]:
              - link "Specials" [ref=e173] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/special
        - generic [ref=e174]:
          - heading "My Account" [level=5] [ref=e175]
          - list [ref=e176]:
            - listitem [ref=e177]:
              - link "My Account" [ref=e178] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - listitem [ref=e179]:
              - link "Order History" [ref=e180] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/order
            - listitem [ref=e181]:
              - link "Wish List" [ref=e182] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - listitem [ref=e183]:
              - link "Newsletter" [ref=e184] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
      - separator [ref=e185]
      - paragraph [ref=e186]:
        - text: Powered By
        - link "OpenCart" [ref=e187] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: Qafox.com © 2026
```

# Test source

```ts
  1   | import { Page, expect, Locator } from "@playwright/test";
  2   | 
  3   | export class RegistrationPage{
  4   | 
  5   |     private readonly page: Page;
  6   |     //Locators using css locators.
  7   | 
  8   |     private readonly txtFirstname: Locator;
  9   |     private readonly txtLastname: Locator;
  10  |     private readonly txtEmail: Locator;
  11  |     private readonly txtTelephone: Locator;
  12  |     private readonly txtPassword: Locator;
  13  |     private readonly txtConfirmPassword: Locator;
  14  |     private readonly chkdPolicy: Locator;
  15  |     private readonly btnContinue: Locator;
  16  |     private readonly getConfirmationMsg: Locator;
  17  | 
  18  |     constructor(page:Page)
  19  |     {
  20  |         this.page=page;
  21  | 
  22  |         //Initialize locators with CSS selectors.
  23  |         this.txtFirstname=page.locator('#input-firstname');
  24  |         this.txtLastname=page.locator('#input-lastname');
  25  |         this.txtEmail=page.locator('#input-email');
  26  |         this.txtTelephone=page.locator('#input-telephone');
  27  |         this.txtPassword=page.locator('#input-password');
  28  |         this.txtConfirmPassword=page.locator('#input-confirm');
  29  |         this.chkdPolicy=page.locator("input[value='1'][name='agree']");
  30  |         this.btnContinue=page.locator("input[value='Continue']");
  31  |         this.getConfirmationMsg=page.locator("h1:has-text('Your Account Has Been Created!')");
  32  | 
  33  |     }
  34  | 
  35  |     //Set the firstname in the registration form.
  36  |     //@param fname - first name to enter.
  37  |     async setFirstName(fname:string): Promise<void>
  38  |     {
  39  |         await this.txtFirstname.fill(fname);
  40  |     }
  41  | 
  42  |     //Set the lastname in the registration form.
  43  |      //@param lname - last name to enter.
  44  |     async setLastname(lname:string): Promise<void>
  45  |     {
  46  |         await this.txtLastname.fill(lname);
  47  |     }
  48  | 
  49  |     //Set the email in the registration form.
  50  |     //@param email - Email to enter.
  51  |     async setEmail(email:string): Promise<void>
  52  |     {
  53  |         await this.txtEmail.fill(email);
  54  |     }
  55  | 
  56  |     //Set the telephone in the registration form.
  57  |     //@param tel- Telephone number to enter.
  58  |     async setTelephone(tel:string):Promise<void>
  59  |     {
  60  |         await this.txtTelephone.fill(tel);
  61  |     }
  62  | 
  63  |     //Set the password to the registration form.
  64  |     //@param pswd - Password to enter.
  65  |     async setPassword(pswd:string):Promise<void>
  66  |     {
  67  |         this.txtPassword.fill(pswd);
  68  |     }
  69  | 
  70  |     //Set the confirm password to the registration form.
  71  |     //@param confpswd - Confirm password to enter.
  72  |     async setConfPswd(confpswd:string):Promise<void>
  73  |     {
  74  |         this.txtConfirmPassword.fill(confpswd);
  75  |     }
  76  | 
  77  |     //Set the check policy to the registration form.
  78  |     
  79  |     async setPrivacyPolicy():Promise<void>
  80  |     {
  81  |         this.chkdPolicy.click();
  82  |     }
  83  | 
  84  |     //Click on continue button.
  85  |     async clickContinue():Promise<void>
  86  |     {
  87  |         this.btnContinue.click();
  88  |     }
  89  | 
  90  |     //Msg confirmation page.
  91  |     async CheckConfirmationMsg():Promise<string>
  92  |     {
> 93  |         return await this.getConfirmationMsg.textContent() ?? '';
      |                                              ^ Error: locator.textContent: Test ended.
  94  |     }
  95  | 
  96  |     //Complete registration flow.
  97  |     //@param userData - Object containing registration data
  98  | 
  99  |     async completeRegistration(userData:{
  100 |          firstName: string;
  101 |          lastName: string;
  102 |          email: string;
  103 |          telephone: string;
  104 |          password:string;
  105 |     }): Promise<void>{
  106 |          
  107 |         this.setFirstName(userData.firstName);
  108 |         this.setLastname(userData.lastName);
  109 |         this.setEmail(userData.email);
  110 |         this.setTelephone(userData.telephone);
  111 |         this.setPassword(userData.password);
  112 |         this.setConfPswd(userData.password);
  113 |         this.setPrivacyPolicy();
  114 |         this.clickContinue();
  115 |         await expect(this.getConfirmationMsg).toBeVisible();
  116 | 
  117 |     }
  118 | 
  119 | 
  120 | 
  121 | }
```