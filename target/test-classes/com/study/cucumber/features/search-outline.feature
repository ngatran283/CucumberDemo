Feature: Search on google using Scenario Outline

  Scenario Outline: Direct search on google firefox
    Given launch browser '<browserName>'
    When user navigate to '<url>'
    Then user enter search term '<searchTerm>'
    And click on search button

    Examples: 
      | browserName | url                | searchTerm |
      | firefox     | http://google.com/ | Automation |
      | chrome      | http://google.com/ | Selenium   |
