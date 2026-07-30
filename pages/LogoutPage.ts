import {Page, Locator} from '@playwright/test';
import { HomePage } from './HomePage';

export class LogoutPage {
      
   private readonly page:Page; 
   private readonly btnContinue: Locator;

   constructor(page: Page)
   {
    this.page=page;
    //Using CSS selector with :has-text() pseudo-class for text matching. 
    this.btnContinue=page.locator('.btn.btn-primary');  //After clicking on the logout button.

   }
   /**
    * Click the continue button after logout.
    * @return Promise<HomePage> - Return instance of HomePage.
    */
    async clickContinue(): Promise<HomePage>
    {
      await this.btnContinue.click();
      return new HomePage(this.page);
    }

   async isContinueButtonVisible(): Promise<boolean>
   {
    return await this.btnContinue.isVisible();    
   }


}