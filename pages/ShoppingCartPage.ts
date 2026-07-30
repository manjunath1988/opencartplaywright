import {Page, Locator} from '@playwright/test';
import {CheckoutPage} from './CheckoutPage'; // Import checkout page if needed.


export class ShoppingCartPage
{
    private readonly page:Page;

    //Locators using CSS selectors
    private readonly lblTotalPrice: Locator;
    private readonly btnCheckout:Locator;

    //Defining constructors. 
    constructor(page:Page){
        this.page=page;

        //Initialize locators with CSS selectors
        this.lblTotalPrice=page.locator("//*[@id='content']/div[2]/div/table//strong[text()='Total:']//following::td");
        this.btnCheckout=page.locator("a[class='btn btn-primary']");
    }
    /**
     * Get the total price from the Shopping cart.
     * @returns Promise<string | null> -The total price text.
     */

    async getTotalPrice():Promise<string | null>
    {
        try
        {
        return await this.lblTotalPrice.textContent();
        }
        catch(error)
        {
        console.log(`Unable to receive the total Price:${error}`)
        return null;
        }
    }

    /**
     * Verify if shopping cart page is loaded
     * @returns Promise<boolean> - true if page is loaded.
     */
    async isPageLoaded():Promise<boolean>
    {
        try
        {
       return await this.btnCheckout.isVisible();
        }
        catch(error)
        {
       return false;
        }
    }
}

