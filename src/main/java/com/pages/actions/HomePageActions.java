package com.pages.actions;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import com.pages.locators.HomePageLocators;
import org.junit.*;
import org.openqa.selenium.WebElement;
import utils.Base;

public class HomePageActions extends Base {

    public WebDriver driver;
    public HomePageLocators homePageLocators = new HomePageLocators();

    public void enterCityName(String cityName) throws IOException {
        homePageLocators.getCityName().clear();
        homePageLocators.getCityName().sendKeys(cityName);
        homePageLocators.getCityName().sendKeys(Keys.ENTER);
        String actualValue = homePageLocators.getCityName().getAttribute("value");
        Assert.assertEquals(cityName, actualValue);
    }

    public void getWeatherReport(int noOfDays, String displayed) throws IOException {
        for (int i = 1; i <= noOfDays; i++) {
            if ("shown".equals(displayed)) {
                Assert.assertTrue(homePageLocators.getDay(i).isDisplayed());
            } else {
                Assert.assertTrue(homePageLocators.getErrorElement().isDisplayed());
            }
        }
    }

    public void dayValidations(String day, String dayValue) throws IOException {
        String actualValue = homePageLocators.getDay(Integer.parseInt(day)).getText();
        Assert.assertEquals(dayValue, actualValue);
    }

    public void expandWeatherReport(int dValue) throws IOException {
	    homePageLocators.getDay(dValue).click();
        waitForMilliSeconds(1000);
    }

    public void verifyWeatherSummaryIcon(int dValue) {
        String firstHourDescription = homePageLocators.getFirstHourWeatherDescriptionElement(dValue).getAttribute("aria-label");
        String dayDescription = homePageLocators.getDayWeatherDescriptionElement(dValue).getAttribute("aria-label");
        Assert.assertEquals(dayDescription, firstHourDescription);
    }

    public void verifyWindSpeed(int dValue) {
        String firstWindSpeed = homePageLocators.getFirstHourWindSpeedElement(dValue).getAttribute("value");
        String summaryWindSpeed = homePageLocators.getDaySummaryWindSpeedElement(dValue).getAttribute("value");
        Assert.assertEquals(summaryWindSpeed, firstWindSpeed);
    }

    public void verifyPressureAggregate(int dValue) {
        String firstHourPressure = homePageLocators.getFirstHourPressureElement(dValue).getAttribute("value");
        String summaryPressure = homePageLocators.getDaySummaryPressureElement(dValue).getAttribute("value");
        Assert.assertEquals(summaryPressure, firstHourPressure);
    }

    private int getTotalNoOfWeatherTimesDetailed(int noOfDay) {
        String initialWeatherTime = homePageLocators.getTimeWebElement(noOfDay).getText();
        return ((24 - (Integer.parseInt(initialWeatherTime)/100))/ 3)+1;
    }

    public void verifyMaxTemperature(int dValue) {
        int totalNoOfWeatherTimesDetailed = getTotalNoOfWeatherTimesDetailed(dValue);
        List maxTempList = new ArrayList<Integer>();
        String maxTempStr = "";
        for (int i =1; i<= totalNoOfWeatherTimesDetailed; i++)
        {
            maxTempStr = homePageLocators.getDetailedMaxTempWebElement(dValue, i).getText();
            maxTempList.add(Integer.parseInt(maxTempStr.substring(0, maxTempStr.length()-1)));
        }
        Collections.sort(maxTempList);
        Collections.reverse(maxTempList);
        int maxTempOfDay = Integer.valueOf(maxTempList.get(0).toString());
        String maxTempDisplayStr = homePageLocators.getMaxTempDisplayedWebElement(dValue).getText();
        int maxTempDisplayed =  Integer.parseInt(maxTempDisplayStr.substring(0, maxTempDisplayStr.length()-1));
        Assert.assertEquals(maxTempDisplayed, maxTempOfDay);
    }

    public void verifyRainfallAggregate(int dValue) {

        int totalNoOfWeatherTimesDetailed = getTotalNoOfWeatherTimesDetailed(dValue);
        String rainfallOfTheDay = "";
        int aggRainfallOfDay = 0;
        for (int i =1; i<= totalNoOfWeatherTimesDetailed; i++)
        {
            rainfallOfTheDay = homePageLocators.getDetailedRainfallWebElement(dValue, i).getText();
            aggRainfallOfDay = aggRainfallOfDay + Integer.parseInt(rainfallOfTheDay.substring(0, rainfallOfTheDay.length()-2));
        }

        String maxTempStr = homePageLocators.getAggRainfalDisplayWebElement(dValue).getText();
        int aggRainfallDisplayed =  Integer.parseInt(maxTempStr.substring(0, maxTempStr.length()-2));

        Assert.assertEquals(aggRainfallDisplayed, aggRainfallOfDay);
    }


    public void verifyMinTemperature(int dValue) {

        int totalNoOfWeatherTimesDetailed = getTotalNoOfWeatherTimesDetailed(dValue);
        List minTempList = new ArrayList<Integer>();
        String minTempStr = "";
        for (int i =1; i<= totalNoOfWeatherTimesDetailed; i++)
        {
            minTempStr = homePageLocators.getDetailedMinTempWebElement(dValue, i).getText();
            minTempList.add(Integer.parseInt(minTempStr.substring(0, minTempStr.length()-1)));
        }
        Collections.sort(minTempList);
        int minTempOfDay =  Integer.valueOf(minTempList.get(0).toString());

        String minTempDisplayStr =homePageLocators.getMinTempDisplayWebElement(dValue).getText();
        int minTempDisplayed =  Integer.parseInt(minTempDisplayStr.substring(0, minTempDisplayStr.length()-1));

        Assert.assertEquals(minTempDisplayed, minTempOfDay);
    }



    public void noOfIntervelWeatherReport(int dValue, String displayed) throws IOException {
        WebElement detailedFirstHourWeather = homePageLocators.getFirstDisplayedHourOfSelectedDay(dValue);
        if ("shown".equals(displayed)){
            Assert.assertTrue(detailedFirstHourWeather.isDisplayed());
        } else {
            Assert.assertFalse(detailedFirstHourWeather.isDisplayed());
        }
    }

    private void waitForMilliSeconds(long milliseconds) {
        try {
            Thread.sleep(milliseconds);
        }catch (InterruptedException ie) {
            ie.printStackTrace();
        }
    }
}
