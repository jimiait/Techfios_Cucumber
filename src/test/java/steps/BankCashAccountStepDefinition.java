package steps;


import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.AccountPage;
import pages.DashboardPage;
import pages.LoginPage;
import pages.TestBase;

public class BankCashAccountStepDefinition extends TestBase{
	
	LoginPage loginpage;
	DashboardPage dashboardpage;
	AccountPage accountpage;
	int rd;
	
	@Before
	public void init() {
		initDriver();
		loginpage = PageFactory.initElements(driver, LoginPage.class);
		dashboardpage = PageFactory.initElements(driver, DashboardPage.class);
		accountpage = PageFactory.initElements(driver, AccountPage.class);
		rd =  generateRandomNo(99);
		
	}
	
	@Given("^User is on the techfios login page$")
	public void user_is_on_the_techfios_login_page() {
	    driver.get("https://www.techfios.com/billing/?ng=admin/");
	}

	@When("^User enters the username as\"([^\"]*)\"$")
	public void user_enters_the_username_as(String username) {
	    loginpage.enterUserName(username);
	}

	@When("^User enters the password as\"([^\"]*)\"$")
	public void user_enters_the_password_as(String password) {
	    loginpage.enterPassword(password);
	}

	@When("^User clicks on login button\"([^\"]*)\"$")
	public void user_clicks_on_login_button(String login) {
	   loginpage.clickSignInButton();
	}

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page() {
	    Assert.assertEquals("Dashboard- iBilling", loginpage.getPageTitle());
	    takeScreenshot(driver);
	}

	@Then("^User clicks on\"([^\"]*)\"button$")
	public void user_clicks_on_bankCash_button(String bankCash) {
	    dashboardpage.clickOnBankAndCashElement();
	}

	@Then("^User clicks on the\"([^\"]*)\"button$")
	public void user_clicks_on_the_newAccount_button(String newAccount) {
		dashboardpage.clickOnNewAccountElement();
	}

	@Then("^User should land on Account page$")
	public void user_should_land_on_Account_page() {
		Assert.assertEquals("Accounts- iBilling", dashboardpage.getAccountPageTitle());
		takeScreenshot(driver);
	}

	@Then("^User enters\"([^\"]*)\"in accountsTitle Element$")
	public void user_enters_in_accountsTitle_Element(String accountTitle) {
	   accountpage.insertAccountTitle(accountTitle + rd);
	}

	@Then("^User enters\"([^\"]*)\"in description Element$")
	public void user_enters_in_description_Element(String description) {
		accountpage.insertDescriptionOfTheAccount(description);
	}

	@Then("^User enters\"([^\"]*)\"in initialBalance Element$")
	public void user_enters_in_initialBalance_Element(String initialBalance) {
		accountpage.insertInitialBalance(initialBalance + rd);
	}

	@Then("^User enters\"([^\"]*)\"in accountNumber Element$")
	public void user_enters_in_accountNumber_Element(String accountNumber) {
		accountpage.insertAccountNumber(accountNumber + rd);
	}

	@Then("^User enters\"([^\"]*)\"in contactPerson Element$")
	public void user_enters_in_contactPerson_Element(String contactPerson) {
		accountpage.insertContactPersonName(contactPerson + rd);
	}

	@Then("^User enters\"([^\"]*)\"in phoneNumber Element$")
	public void user_enters_in_phoneNumber_Element(String Phone) {
		accountpage.insertPhoneNumber(Phone + rd);
	}

	@Then("^User enters\"([^\"]*)\"in bankingURL Element$")
	public void user_enters_in_bankingURL_Element(String internetBankingURL) {
		accountpage.insertBankingURL(internetBankingURL);
	}
	
	@Then("^User clicks on\"([^\"]*)\"button to create new account$")
	public void user_clicks_on_submit_button_to_create_new_account(String submit) {
		accountpage.clickOnSubmitButton();
		takeScreenshot(driver);
	}
	

	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully() {
	    
	}
	
	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}

}
