package stepdefs;

import com.pages.actions.GenericActions;
import com.pages.actions.HomePageActions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utils.Base;

public class HomePageStepDef extends Base {

    GenericActions genericActions = new GenericActions();
    HomePageActions homePageActions = new HomePageActions();

    @Given("^the user is in the (.*) page$")
    public void the_user_is_in_the_weather_application_home_page(String expectedPageTitle) throws Throwable {
	genericActions.pageValidation(expectedPageTitle);
    }

    @When("^the user enters the city name (.*)$")
    public void the_user_enter_the_city_name(String cityName) throws Throwable {
	homePageActions.enterCityName(cityName);
    }

    @Then("^the (.*) day weather forecast for the selected city is (.*)$")
    public void the_user_gets_a_day_weather_forecast_for_the_selected_city(int noOfDays, String displayed) throws Throwable {
	homePageActions.getWeatherReport(noOfDays, displayed);
    }

    @Then("^the user gets a below days weather forecast for the selected city$")
    public void the_user_gets_a_below_days_weather_forecast_for_the_selected_city(DataTable dayDetails)
	    throws Throwable {
	genericActions.getDaysValue(dayDetails);

    }

    @Then("^the summary weather report is correct for the below days$")
    public void the_summary_weather_report_is_correct_for_the_below_days(DataTable dayDetails) throws Throwable {
        genericActions.verifySummary(dayDetails);
    }


    @When("^the user clicks on a day (.*)$")
    public void the_user_clicks_on_a_day(int dValue) throws Throwable {
	
	homePageActions.expandWeatherReport(dValue);
       
    }
    
    @Then("^the detailed weather report for the day (.*) is (.*)$")
    public void the_detailed_weather_report_for_the_day_is_shown(int dValue, String displayed) throws Throwable {

        homePageActions.noOfIntervelWeatherReport(dValue, displayed);
    }


}
