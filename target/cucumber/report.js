$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/BankCashAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CreateBankAndCashAccount"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the username as\"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the password as\"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login button\"\u003clogin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on\"\u003cbankCash\u003e\"button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on the\"\u003cnewAccount\u003e\"button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should land on Account page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters\"\u003caccountTitle\u003e\"in accountsTitle Element",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters\"\u003cdescription\u003e\"in description Element",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters\"\u003cinitialBalance\u003e\"in initialBalance Element",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters\"\u003caccountNumber\u003e\"in accountNumber Element",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters\"\u003ccontactPerson\u003e\"in contactPerson Element",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters\"\u003cPhone\u003e\"in phoneNumber Element",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters\"\u003cinternetBankingURL\u003e\"in bankingURL Element",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on\"\u003csubmit\u003e\"button to create new account",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "login",
        "bankCash",
        "newAccount",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "Phone",
        "internetBankingURL",
        "submit"
      ],
      "line": 24,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "login",
        "bankCash",
        "newAccount",
        "Pream",
        "Checking",
        "50000",
        "895771230",
        "Tagore",
        "2140000000",
        "https://www.jimiait.com",
        "submit"
      ],
      "line": 25,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1777188300,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@CreateBankAndCashAccount"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the username as\"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the password as\"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login button\"login\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on\"bankCash\"button",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on the\"newAccount\"button",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should land on Account page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters\"Pream\"in accountsTitle Element",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters\"Checking\"in description Element",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters\"50000\"in initialBalance Element",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters\"895771230\"in accountNumber Element",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters\"Tagore\"in contactPerson Element",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters\"2140000000\"in phoneNumber Element",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters\"https://www.jimiait.com\"in bankingURL Element",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on\"submit\"button to create new account",
  "matchedColumns": [
    12
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "BankCashAccountStepDefinition.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 695686600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 28
    }
  ],
  "location": "BankCashAccountStepDefinition.user_enters_the_username_as(String)"
});
formatter.result({
  "duration": 3095694400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 28
    }
  ],
  "location": "BankCashAccountStepDefinition.user_enters_the_password_as(String)"
});
formatter.result({
  "duration": 3067543000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 28
    }
  ],
  "location": "BankCashAccountStepDefinition.user_clicks_on_login_button(String)"
});
formatter.result({
  "duration": 4212468500,
  "status": "passed"
});
formatter.match({
  "location": "BankCashAccountStepDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 405737800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bankCash",
      "offset": 15
    }
  ],
  "location": "BankCashAccountStepDefinition.user_clicks_on_bankCash_button(String)"
});
formatter.result({
  "duration": 3044392900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newAccount",
      "offset": 19
    }
  ],
  "location": "BankCashAccountStepDefinition.user_clicks_on_the_newAccount_button(String)"
});
formatter.result({
  "duration": 3427007700,
  "status": "passed"
});
formatter.match({
  "location": "BankCashAccountStepDefinition.user_should_land_on_Account_page()"
});
formatter.result({
  "duration": 331346500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pream",
      "offset": 12
    }
  ],
  "location": "BankCashAccountStepDefinition.user_enters_in_accountsTitle_Element(String)"
});
formatter.result({
  "duration": 60682600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Checking",
      "offset": 12
    }
  ],
  "location": "BankCashAccountStepDefinition.user_enters_in_description_Element(String)"
});
formatter.result({
  "duration": 84028900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 12
    }
  ],
  "location": "BankCashAccountStepDefinition.user_enters_in_initialBalance_Element(String)"
});
formatter.result({
  "duration": 54234600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "895771230",
      "offset": 12
    }
  ],
  "location": "BankCashAccountStepDefinition.user_enters_in_accountNumber_Element(String)"
});
formatter.result({
  "duration": 62485800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tagore",
      "offset": 12
    }
  ],
  "location": "BankCashAccountStepDefinition.user_enters_in_contactPerson_Element(String)"
});
formatter.result({
  "duration": 74673800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2140000000",
      "offset": 12
    }
  ],
  "location": "BankCashAccountStepDefinition.user_enters_in_phoneNumber_Element(String)"
});
formatter.result({
  "duration": 62192300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.jimiait.com",
      "offset": 12
    }
  ],
  "location": "BankCashAccountStepDefinition.user_enters_in_bankingURL_Element(String)"
});
formatter.result({
  "duration": 64117900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 15
    }
  ],
  "location": "BankCashAccountStepDefinition.user_clicks_on_submit_button_to_create_new_account(String)"
});
formatter.result({
  "duration": 5220368800,
  "status": "passed"
});
formatter.match({
  "location": "BankCashAccountStepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 11600,
  "status": "passed"
});
formatter.after({
  "duration": 726793500,
  "status": "passed"
});
});