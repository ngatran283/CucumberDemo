$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/eclipse-workspace/workspace2/CucumberBDDParallel/src/test/resources/com/study/cucumber/features/search-many.feature");
formatter.feature({
  "line": 1,
  "name": "Search on google",
  "description": "",
  "id": "search-on-google",
  "keyword": "Feature"
});
formatter.before({
  "duration": 195587,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Direct search on google firefox",
  "description": "",
  "id": "search-on-google;direct-search-on-google-firefox",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "launch browser \u0027firefox\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user navigate to \u0027http://google.com/\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter search term \u0027Automation\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on search button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 16
    }
  ],
  "location": "GoogleSteps.launch_browser_firefox(String)"
});
formatter.result({
  "duration": 6475016991,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://google.com/",
      "offset": 18
    }
  ],
  "location": "GoogleSteps.user_navigate_to_http_google_com(String)"
});
formatter.result({
  "duration": 2326590747,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation",
      "offset": 24
    }
  ],
  "location": "GoogleSteps.user_enter_search_term_Automation(String)"
});
formatter.result({
  "duration": 409152180,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.click_on_search_button()"
});
formatter.result({
  "duration": 2619893975,
  "status": "passed"
});
formatter.after({
  "duration": 2336656673,
  "status": "passed"
});
formatter.before({
  "duration": 75139,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Direct search on google chrome",
  "description": "",
  "id": "search-on-google;direct-search-on-google-chrome",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "launch browser \u0027chrome\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user navigate to \u0027http://google.com/\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user enter search term \u0027Automation\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click on search button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 16
    }
  ],
  "location": "GoogleSteps.launch_browser_firefox(String)"
});
formatter.result({
  "duration": 4535619459,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://google.com/",
      "offset": 18
    }
  ],
  "location": "GoogleSteps.user_navigate_to_http_google_com(String)"
});
formatter.result({
  "duration": 3458518599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation",
      "offset": 24
    }
  ],
  "location": "GoogleSteps.user_enter_search_term_Automation(String)"
});
formatter.result({
  "duration": 1096816994,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.click_on_search_button()"
});
formatter.result({
  "duration": 2070517739,
  "status": "passed"
});
formatter.after({
  "duration": 1241831040,
  "status": "passed"
});
});