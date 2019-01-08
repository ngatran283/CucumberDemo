package com.study.cucumber.runners;

import org.junit.runner.RunWith;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.TestNGCucumberRunner;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/com/study/cucumber/features/search-many.feature", glue = "com.study.cucumber.steps")
public class SearchManyFeature {

	@Test
	public void runCukes() {

		new TestNGCucumberRunner(getClass()).runCukes();
	}

}
