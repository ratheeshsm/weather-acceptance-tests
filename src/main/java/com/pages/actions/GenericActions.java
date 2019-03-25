package com.pages.actions;

import java.io.IOException;
import java.util.Map;

import utils.Base;
import org.junit.*;

import cucumber.api.DataTable;

public class GenericActions extends Base {

    HomePageActions homePageActions=new HomePageActions();
    public void pageValidation(String expectedPageTitle) throws IOException {

	String actualTitle = getDriver().getTitle();
	String expectedTitle = expectedPageTitle;
	Assert.assertEquals(actualTitle, expectedTitle);
    }
    
    public void getDaysValue(DataTable dayDetails) throws IOException {
	
		Map<String, String> dayValues = dayDetails.asMap(String.class, String.class);
		for (Map.Entry<String, String> entry : dayValues.entrySet()) {
			System.out.println(entry.getKey() + " = " + entry.getValue());
			homePageActions.dayValidations(entry.getKey(), entry.getValue());
		}
	}

	public void verifySummary(DataTable dayDetails) throws IOException {

		Map<String, String> dayValues = dayDetails.asMap(String.class, String.class);
		for (Map.Entry<String, String> entry : dayValues.entrySet()) {
			homePageActions.enterCityName(entry.getKey());
			for (int i=1; i<=Integer.parseInt(entry.getValue());i++ ) {
				homePageActions.expandWeatherReport(i);
				homePageActions.verifyWeatherSummaryIcon(i);
				homePageActions.verifyMaxTemperature(i);
				homePageActions.verifyMinTemperature(i);
				homePageActions.verifyWindSpeed(i);
				homePageActions.verifyRainfallAggregate(i);
				homePageActions.verifyPressureAggregate(i);
			}
		}
	}
}

