package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class DashboardPage {

	WebDriver driver;

	public DashboardPage(WebDriver driver) {
	  this.driver = driver;
	 }
	
	 @FindBy(how = How.XPATH, using = "//span[contains(text(), 'Bank & Cash')]") 
	 WebElement bankAndCashElement;
	 @FindBy(how = How.XPATH,using = "//a[contains(text(), 'New Account')]") 
	 WebElement newAccountElement;
	 @FindBy(how = How.XPATH,using = "//a[contains(text(), 'List Accounts')]") 
	 WebElement listAccountElement;
	
	public void clickOnBankAndCashElement() {
		bankAndCashElement.click();
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	public void clickOnNewAccountElement() {
		newAccountElement.click();
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	public String getAccountPageTitle() {
		return driver.getTitle();
	}

}
