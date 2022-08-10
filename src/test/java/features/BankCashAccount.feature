Feature: Techfios bank and cash New Account Functionality 

@CreateBankAndCashAccount
Scenario Outline: User should be able to login with valid credentials and open a new account	
	Given User is on the techfios login page 
	When User enters the username as"<username>" 
	When User enters the password as"<password>"
	And User clicks on login button"<login>"
	Then User should land on Dashboard page 
	And User clicks on"<bankCash>"button
	And User clicks on the"<newAccount>"button
	Then User should land on Account page
	And User enters"<accountTitle>"in accountsTitle Element 
	And User enters"<description>"in description Element 
	And User enters"<initialBalance>"in initialBalance Element 
	And User enters"<accountNumber>"in accountNumber Element 
	And User enters"<contactPerson>"in contactPerson Element 
	And User enters"<Phone>"in phoneNumber Element 
	And User enters"<internetBankingURL>"in bankingURL Element 
	Then User clicks on"<submit>"button to create new account
	Then User should be able to validate account created successfully
	
	Examples: 
	|username|password|login|bankCash|newAccount|accountTitle|description|initialBalance|accountNumber|contactPerson|Phone|internetBankingURL|submit|
	|demo@techfios.com|abc123|login|bankCash|newAccount|Pream|Checking|50000|895771230|Tagore|2140000000|https://www.jimiait.com|submit|