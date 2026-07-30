import { Page, Locator, expect } from "@playwright/test";
import {LogoutPage} from './LogoutPage'; //import LogoutPage if needed.

export class MyAccountPage
{
    private readonly page:Page;

    //Locators using css selectors
    private readonly msgHeading: Locator;
    private readonly lnkLogout: Locator;

    //Constructors
    constructor(page:Page)
    {
        this.page=page;
        //Initialize locators with css selectors
        this.msgHeading=page.locator('h2:has-text("My Account")');
        this.lnkLogout=page.locator('a:nth-child(13)');
    }
    /**
     * Verify if My Account page is displayed.
     * @return Promise<boolean> - Return true if heading is visible
     */

    async isMyAccountPageExists():Promise<boolean>
    {
        try
        {
       const isVisible=await this.msgHeading.isVisible();
       return isVisible;
        }
        catch(error)
        {
          console.log(`Error checking my account page visibility:${error}`);
          return false;
        }
    }
    /**
     * Click on Logout link
     * @return Promise<LogoutPage> - Returns instance of LogoutPage
     */

    async clickLogout():Promise<any>
    {
        try
        {
        await this.lnkLogout.click();
        return new LogoutPage(this.page);
        }
        catch(error)
        {
            console.log(`Unable to click on the logout link:${error}`);
            throw error; //Re-throw the error to fail the test
        }
    }
    /**
     * Alternative method to return pafe exists using title
     * @return Promise<boolean> - Returns true if page title matches
     */

    async getPageTitle():Promise<string>
    {
     return (this.page.title());
    }   


}