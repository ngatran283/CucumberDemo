$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/eclipse-workspace/workspace2/CucumberBDDParallel/src/test/resources/com/study/cucumber/features/search-outline.feature");
formatter.feature({
  "line": 1,
  "name": "Search on google using Scenario Outline",
  "description": "",
  "id": "search-on-google-using-scenario-outline",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Direct search on google firefox",
  "description": "",
  "id": "search-on-google-using-scenario-outline;direct-search-on-google-firefox",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "launch browser \u0027\u003cbrowserName\u003e\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user navigate to \u0027\u003curl\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter search term \u0027\u003csearchTerm\u003e\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on search button",
  "keyword": "And "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "search-on-google-using-scenario-outline;direct-search-on-google-firefox;",
  "rows": [
    {
      "cells": [
        "browserName",
        "url",
        "searchTerm"
      ],
      "line": 10,
      "id": "search-on-google-using-scenario-outline;direct-search-on-google-firefox;;1"
    },
    {
      "cells": [
        "firefox",
        "http://google.com/",
        "Automation"
      ],
      "line": 11,
      "id": "search-on-google-using-scenario-outline;direct-search-on-google-firefox;;2"
    },
    {
      "cells": [
        "chrome",
        "http://google.com/",
        "Selenium"
      ],
      "line": 12,
      "id": "search-on-google-using-scenario-outline;direct-search-on-google-firefox;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 170289,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Direct search on google firefox",
  "description": "",
  "id": "search-on-google-using-scenario-outline;direct-search-on-google-firefox;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "launch browser \u0027firefox\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user navigate to \u0027http://google.com/\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter search term \u0027Automation\u0027",
  "matchedColumns": [
    2
  ],
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
  "duration": 13865676775,
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
  "duration": 2601077994,
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
  "duration": 456009953,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.click_on_search_button()"
});
formatter.result({
  "duration": 4314327680,
  "status": "passed"
});
formatter.after({
  "duration": 4866194439,
  "status": "passed"
});
formatter.before({
  "duration": 72873,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Direct search on google firefox",
  "description": "",
  "id": "search-on-google-using-scenario-outline;direct-search-on-google-firefox;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "launch browser \u0027chrome\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user navigate to \u0027http://google.com/\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter search term \u0027Selenium\u0027",
  "matchedColumns": [
    2
  ],
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
      "val": "chrome",
      "offset": 16
    }
  ],
  "location": "GoogleSteps.launch_browser_firefox(String)"
});
formatter.result({
  "duration": 3871159626,
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
  "duration": 2248437570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Selenium",
      "offset": 24
    }
  ],
  "location": "GoogleSteps.user_enter_search_term_Automation(String)"
});
formatter.result({
  "duration": 310023259,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSteps.click_on_search_button()"
});
formatter.result({
  "duration": 2095028016,
  "status": "passed"
});
formatter.after({
  "duration": 1100034359,
  "status": "passed"
});
});