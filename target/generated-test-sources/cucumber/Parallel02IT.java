import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(strict = true,
features = {"D:/eclipse-workspace/workspace2/CucumberBDDParallel/src/test/resources/com/study/cucumber/features/search-outline.feature"},
plugin = {"json:target/cucumber-parallel/2.json", "html:target/cucumber-parallel/2.html"},
monochrome = false,
 tags = {"~@ignored"}, glue = { "com.study.cucumber.steps" })
public class Parallel02IT {
}
