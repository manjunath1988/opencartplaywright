import { Page, expect, Locator } from "@playwright/test";

export class RegistrationPage{

    private readonly page: Page;
    //Locators using css locators.

    private readonly txtFirstname: Locator;
    private readonly txtLastname: Locator;
    private readonly txtEmail: Locator;
    private readonly txtTelephone: Locator;
    private readonly txtPassword: Locator;
    private readonly txtConfirmPassword: Locator;
    private readonly chkdPolicy: Locator;
    private readonly btnContinue: Locator;
    private readonly getConfirmationMsg: Locator;

    constructor(page:Page)
    {
        this.page=page;

        //Initialize locators with CSS selectors.
        this.txtFirstname=page.locator('#input-firstname');
        this.txtLastname=page.locator('#input-lastname');
        this.txtEmail=page.locator('#input-email');
        this.txtTelephone=page.locator('#input-telephone');
        this.txtPassword=page.locator('#input-password');
        this.txtConfirmPassword=page.locator('#input-confirm');
        this.chkdPolicy=page.locator("input[value='1'][name='agree']");
        this.btnContinue=page.locator("input[value='Continue']");
        this.getConfirmationMsg=page.locator("h1:has-text('Your Account Has Been Created!')");

    }

    //Set the firstname in the registration form.
    //@param fname - first name to enter.
    async setFirstName(fname:string): Promise<void>
    {
        await this.txtFirstname.fill(fname);
    }

    //Set the lastname in the registration form.
     //@param lname - last name to enter.
    async setLastname(lname:string): Promise<void>
    {
        await this.txtLastname.fill(lname);
    }

    //Set the email in the registration form.
    //@param email - Email to enter.
    async setEmail(email:string): Promise<void>
    {
        await this.txtEmail.fill(email);
    }

    //Set the telephone in the registration form.
    //@param tel- Telephone number to enter.
    async setTelephone(tel:string):Promise<void>
    {
        await this.txtTelephone.fill(tel);
    }

    //Set the password to the registration form.
    //@param pswd - Password to enter.
    async setPassword(pswd:string):Promise<void>
    {
        await this.txtPassword.fill(pswd);
    }

    //Set the confirm password to the registration form.
    //@param confpswd - Confirm password to enter.
    async setConfPswd(confpswd:string):Promise<void>
    {
        await this.txtConfirmPassword.fill(confpswd);
    }

    //Set the check policy to the registration form.
    
    async setPrivacyPolicy():Promise<void>
    {
        await this.chkdPolicy.click();
    }

    //Click on continue button.
    async clickContinue():Promise<void>
    {
        await this.btnContinue.click();
    }

    //Msg confirmation page.
    async CheckConfirmationMsg():Promise<string>
    {
        return await this.getConfirmationMsg.textContent() ?? '';
    }

    //Complete registration flow.
    //@param userData - Object containing registration data

    async completeRegistration(userData:{
         firstName: string;
         lastName: string;
         email: string;
         telephone: string;
         password:string;
    }): Promise<void>{
         
        this.setFirstName(userData.firstName);
        this.setLastname(userData.lastName);
        this.setEmail(userData.email);
        this.setTelephone(userData.telephone);
        this.setPassword(userData.password);
        this.setConfPswd(userData.password);
        this.setPrivacyPolicy();
        this.clickContinue();
        await expect(this.getConfirmationMsg).toBeVisible();

    }



}