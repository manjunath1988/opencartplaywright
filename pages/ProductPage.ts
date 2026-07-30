import { Page, Locator, expect } from '@playwright/test';
import { ShoppingCartPage } from './ShoppingCartPage'; // Import shoppingCartPage if needed.

export class ProductPage {
    readonly page: Page;

    //Definding Variables.
    //Locators using CSS selectors.
    private readonly txtQuantity: Locator;
    private readonly btnAddToCart: Locator;
    private readonly cnfMsg: Locator;
    private readonly btnItems: Locator;
    private readonly lnkViewCart: Locator;

    //Defining Constructors.
    constructor(page: Page) {
        this.page = page;
        //Innitialize locators with CSS Locators.
        this.txtQuantity = page.locator('input[name="quantity"]');
        this.btnAddToCart = page.locator('#button-cart');
        this.cnfMsg = page.locator('.alert.alert-success.alert-dismissible');
        this.btnItems = page.locator('#cart');
        this.lnkViewCart = page.locator('strong:has-text("View Cart")');
    }
    /**
     * Set the product quantity.
     * @param qty - Quantity to set
     */
    async setQuantity(qty: string) {
        await this.txtQuantity.fill('');
        await this.txtQuantity.fill(qty);
    }
    /**
     * Adds product to cart.
     */
    async addToCart(): Promise<void> {
        await this.btnAddToCart.click();
    }
    /**
     * Check if confirmation message is visible
     * @returns Promise<boolean> - Returns true if message is visible.
     */

    async isConfirmationMessageVisible(): Promise<boolean> {
        try {
            if (this.cnfMsg != null) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (error) {
            console.log(`Confirmation message not found:${error}`)
            return false;
        }
    }
   
    /**
     * Click on items button to navigate to cart.
     */
    async clickItemsToNavigateToCart():Promise<void>
    {
        await this.btnItems.click();
    }


    /**
     * Click on view cart link.
     * @return Promise<ShoppingCartPage> --Returns ShoppingCartPage instance.
     */
    async clickViewCart():Promise<ShoppingCartPage>
    {
       await this.lnkViewCart.click();
       return new ShoppingCartPage(this.page);
    }


    /**
     * Complete workflow to add product to cart.
     * @param quantity - Quantity of product to add. 
     */
    async addProductToCart(quantity:string): Promise<void>
    {
       await this.setQuantity(quantity);
       await this.addToCart();
       await this.isConfirmationMessageVisible();
    }

}

