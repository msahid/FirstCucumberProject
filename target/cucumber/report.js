$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/LoginWithDataFromDB.feature");
formatter.feature({
  "line": 2,
  "name": "TechFios Login functionality validation",
  "description": "",
  "id": "techfios-login-functionality-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@DbFeature"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 3789148244,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to login with correct credential",
  "description": "",
  "id": "techfios-login-functionality-validation;user-should-be-able-to-login-with-correct-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@DbScenario1"
    },
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the TechFios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters \"username\" from database",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters \"password\" from database",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on submit button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_the_TechFios_login_page()"
});
formatter.result({
  "duration": 1170404910,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 13
    }
  ],
  "location": "LoginStepDefination.user_enters_from_database(String)"
});
formatter.result({
  "duration": 3777910824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 13
    }
  ],
  "location": "LoginStepDefination.user_enters_from_database(String)"
});
formatter.result({
  "duration": 3189357966,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_submit_button()"
});
formatter.result({
  "duration": 4811566551,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 263221262,
  "status": "passed"
});
formatter.after({
  "duration": 405325725,
  "status": "passed"
});
});