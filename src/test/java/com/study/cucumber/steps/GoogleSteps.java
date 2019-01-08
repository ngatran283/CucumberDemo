package com.study.cucumber.steps;

import org.openqa.selenium.By;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GoogleSteps extends BaseSteps {

	protected Scenario scen;
	static String scenarioName;

	@Before
	public void before() {

	}

	@After
	public void after() {
		quit();
	}

	@Given("^launch browser '(.*?)'$")
	public void launch_browser_firefox(String browserName) {
		startBrowser(browserName);

	}

	@When("^user navigate to '(.*?)'$")
	public void user_navigate_to_http_google_com(String url) {
		navigateToURL(url);
	}

	@Then("^user enter search term '(.*?)'$")
	public void user_enter_search_term_Automation(String searchTerm) {
		getDriver().findElement(By.name("q")).sendKeys(searchTerm);
	}

	@And("^click on search button$")
	public void click_on_search_button() {
		getDriver().findElement(By.name("btnK")).click();

	}
}
