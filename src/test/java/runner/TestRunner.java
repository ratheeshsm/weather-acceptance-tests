package runner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(

features = { "src/test/resources/features" }, 
glue = { "stepdefs" }, 
plugin = {"pretty", "html:target/cucumber"},
tags = { "@test" }

)

public class TestRunner

{

}
