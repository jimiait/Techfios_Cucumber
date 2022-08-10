package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AccountPage {

	WebDriver driver;

	public AccountPage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//input[@id='account']")
	WebElement accountTitleElement;
	@FindBy(how = How.XPATH, using = "//input[@id='description']")
	WebElement descriptionElement;
	@FindBy(how = How.XPATH, using = "//input[@id='balance']")
	WebElement initialBalanceElement;
	@FindBy(how = How.XPATH, using = "//input[@id='account_number']")
	WebElement accountNumberElement;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_person']")
	WebElement contactPersonElement;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_phone']")
	WebElement phoneElement;
	@FindBy(how = How.XPATH, using = "//input[@id='ib_url']")
	WebElement internetBankingURLElement;
	@FindBy(how = How.XPATH, using = "//button[@class='btn btn-primary']")
	WebElement submitButtonElement;

	public void insertAccountTitle(String accounttitle) {
		accountTitleElement.sendKeys(accounttitle);
	}

	public void insertDescriptionOfTheAccount(String description) {
		descriptionElement.sendKeys(description);
	}

	public void insertInitialBalance(String initialbalance) {
		initialBalanceElement.sendKeys(initialbalance);
	}

	public void insertAccountNumber(String accountnumber) {
		accountNumberElement.sendKeys(accountnumber);
	}

	public void insertContactPersonName(String contactperson) {
		contactPersonElement.sendKeys(contactperson);
	}

	public void insertPhoneNumber(String phonenumber) {
		phoneElement.sendKeys(phonenumber);
	}

	public void insertBankingURL(String bankingURL) {
		internetBankingURLElement.sendKeys(bankingURL);
	}

	public void clickOnSubmitButton() {
		submitButtonElement.click();
		try {
			Thread.sleep(4000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

//	String before_xpath = "//tbody/tr[";
//	String after_xpath = "]/td[3]";
//	
//	public void validateListCustomersPage() {
//		
//		for(int i=1; i<=10; i++) {
//			String actualText = driver.findElement(By.xpath(before_xpath + i + after_xpath)).getText();
//			System.out.println(actualText);
//		}
//	}

}
