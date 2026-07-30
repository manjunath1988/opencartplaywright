import { Page, expect, Locator } from "@playwright/test";
import { ProductPage } from "./ProductPage"; // Import Product page if needed.


export class SearchResultsPage {
    private readonly page: Page;

    //Define Locators
    //Locators using CSS selectors.
    private readonly searchPageHeader: Locator;
    private readonly searchProducts: Locator;

    //Define Constructors.
    constructor(page: Page) {
        this.page = page;

        //Initialize locators with css locators.
        this.searchPageHeader = page.locator('#content h1');
        this.searchProducts = page.locator('h4>a')

    }
    /**
     * Action methods.
     * Verify if the search result page exists by checking the header texts.
     * @returns Promise<boolean> - true if the search result page exists.
     */
    async isSearchResultsPageExists(): Promise<boolean> {
        try {
            const headerText = await this.searchPageHeader.textContent();
            return headerText?.includes('Search -') ?? false;
        }
        catch (error) {
            return false;

        }
    }
    /**
     * Check if a product exists in a search results by its name 
     * @param productName - The name of the product to search for.
     * @returns - Promise<boolean> - true if the product exists.
     *
     */

    async isProductExists(productName: string): Promise<boolean> {
        try {
            const count = await this.searchProducts.count();
            for (let i = 0; i < count; i++) {
                const product = this.searchProducts.nth(i);
                const title = await product.textContent();
                if (title === productName) {
                    return true;
                }
            }
        }
        catch (error) {
            console.log(`Error checking product existance: ${error}`)
        }
        return false;
    }

    /**
     * Select a product from the search results by its name.
     * @param productName - The name of the product to select.
     * @returns Promise<ProductPage> - ProductPage instance afer selecting the product.
     */

    async selectProduct(productName: string): Promise<ProductPage | null> {
        try {
            const count = await this.searchProducts.count();
            for (let i = 0; i < count; i++) {
                const product = this.searchProducts.nth(i);
                const title = await product.textContent();
                if (title === productName) {
                    await product.click();
                    return new ProductPage(this.page)
                }
            }
            console.log(`Product not found:${productName}`)
        }
        catch (error) {
            console.log(`Error while selecting the product:${error}`)
        }
        return null;
    }

    /**
     * Get count of the products in search results
     * @return Promise<number> - Number of products found.
     */

    async getProductCount(): Promise<number> {
        return await this.searchProducts.count();
    }
}
