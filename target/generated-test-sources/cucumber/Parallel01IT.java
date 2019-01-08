import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(strict = true,
features = {"D:/eclipse-workspace/workspace2/CucumberBDDParallel/src/test/resources/com/study/cucumber/features/search-many.feature"},
plugin = {"json:target/cucumber-parallel/1.json", "html:target/cucumber-parallel/1.html"},
monochrome = false,
 tags = {"~@ignored"}, glue = { "com.study.cucumber.steps" })
public class Parallel01IT {
}
