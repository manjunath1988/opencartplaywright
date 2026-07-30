import { Page, expect, Locator } from "@playwright/test";


export class HomePage {
    private readonly page: Page;
    //Locators
    private readonly lnkMyAccount: Locator;
    private readonly lnkRegister: Locator;
    private readonly lnkLogin: Locator;
    private readonly txtSearchbox: Locator;
    private readonly btnSearch: Locator;

    //constructors
    constructor(page: Page) {
        this.page= page;
        this.lnkMyAccount = page.locator("a[title='My Account']");
        this.lnkRegister = page.locator("li[class='dropdown open'] li:nth-child(1) a:nth-child(1)");
        this.lnkLogin = page.locator("li[class='dropdown open'] li:nth-child(2) a:nth-child(1)");
        this.txtSearchbox = page.locator("input[placeholder='Search']");
        this.btnSearch = page.locator("button[class='btn btn-default btn-lg']");
    }

    //action methods
    //Check if HomePage exists.
    async isHomePageExists() {
        let title: String = await this.page.title();

        if (title) {
            return true;
        }
        return false;
    }
    //Click "My Account" link
    async clickMyAccount() {
        try {
            await this.lnkMyAccount.click();
        }
        catch (error) {
            console.log(`Exception occured while clicking 'My Account':${error}`);
            throw error;
        }
    }

    //Click Register link.
    async clickRegister() {

        try {
            await this.lnkRegister.click();
        }
        catch (error) {
            console.log(`Exception occured while clicking on the 'Register':${error}`);
            throw error;
        }
    }

    //Click Login link.
    async clickLogin() {

        try {
            await this.lnkLogin.click();
        }

        catch (error) {
            console.log(`Exception occured while clicking on the 'Login':${error}`);
            throw error;
        }
    }
    //Enter product name in the search box.

    async enterProductName(pName: string) {

        try {
            await this.txtSearchbox.fill(pName);
        }

        catch (error) {
            console.log(`Exception occured while entering in 'searchbox':${error}`);
            throw error;
        }
    }

    //Click on search button.
    async clickSearchButton() {
        try {
            this.btnSearch.click();
        }
        catch (error) {
            console.log(`Exception occured while clicking on 'search button':${error}`);
            throw error;
        }
    }

}