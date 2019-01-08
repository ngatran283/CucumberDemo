Feature: Search on google

  Scenario: Direct search on google firefox
    Given launch browser 'firefox'
    When user navigate to 'http://google.com/'
    Then user enter search term 'Automation'
    And click on search button

  Scenario: Direct search on google chrome
    Given launch browser 'chrome'
    When user navigate to 'http://google.com/'
    Then user enter search term 'Automation'
    And click on search button
