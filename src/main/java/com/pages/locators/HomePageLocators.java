package com.pages.locators;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import utils.Base;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class HomePageLocators extends Base{

   By cityName = By.cssSelector("#city");

    public WebElement getCityName()
    {
	return getDriver().findElement(cityName);
    }
        
    public WebElement getDay(int noOfDay)
	{
		String cssDaySelectorStr = "[data-test='day-"+noOfDay+"']";
		return getDriver().findElement(By.cssSelector(cssDaySelectorStr));
	}

	public WebElement getErrorElement()
	{
		String cssDaySelectorStr = "[data-test='error']";
		return getDriver().findElement(By.cssSelector(cssDaySelectorStr));
	}

	public WebElement getFirstDisplayedHourOfSelectedDay(int noOfday) {
		String cssDaySelectorStr = "[data-test='hour-"+noOfday+"-1']";
		return getDriver().findElement(By.cssSelector(cssDaySelectorStr));
	}

	public WebElement getFirstHourWeatherDescriptionElement(int noOfday) {
		return getDriver().findElement(By.cssSelector("[data-test='description-"+noOfday+"-1']"));
	}

	public WebElement getFirstHourWindSpeedElement(int noOfday) {
		return getDriver().findElement(By.cssSelector("[data-test='speed-"+noOfday+"-1']"));
	}

	public WebElement getFirstHourPressureElement(int noOfday) {
		return getDriver().findElement(By.cssSelector("[data-test='pressure-"+noOfday+"-1']"));
	}

	public WebElement getDaySummaryWindSpeedElement(int noOfday) {
		return getDriver().findElement(By.cssSelector("[data-test='speed-"+noOfday+"']"));
	}

	public WebElement getDayWeatherDescriptionElement(int noOfday) {
		return getDriver().findElement(By.cssSelector("[data-test='description-"+noOfday+"']"));
	}
	public WebElement getDaySummaryPressureElement(int noOfday) {
		return getDriver().findElement(By.cssSelector("[data-test='pressure-"+noOfday+"']"));
	}


	public WebElement getTimeWebElement(int noOfDay) {
		String cssDaySelectorStr = "[data-test='hour-" + noOfDay + "-1']";
		return getDriver().findElement(By.cssSelector(cssDaySelectorStr));
	}

	public WebElement getDetailedRainfallWebElement(int noOfDay, int detailNum) {
		return getDriver().findElement(By.cssSelector("[data-test='rainfall-"+noOfDay+"-"+detailNum+"']"));
	}

	public WebElement getAggRainfalDisplayWebElement(int noOfDay) {
    	return getDriver().findElement(By.cssSelector("[data-test='rainfall-"+noOfDay+"']"));
	}

	public WebElement getDetailedMinTempWebElement(int noOfDay, int detailNum) {
		return getDriver().findElement(By.cssSelector("[data-test='minimum-"+noOfDay+"-"+detailNum+"']"));
	}

	public WebElement getDetailedMaxTempWebElement(int noOfDay, int detailNum) {
    	return getDriver().findElement(By.cssSelector("[data-test='maximum-"+noOfDay+"-"+detailNum+"']"));
	}

	public WebElement getMaxTempDisplayedWebElement(int noOfDay) {
    	return getDriver().findElement(By.cssSelector("[data-test='maximum-"+noOfDay+"']"));
	}

	public WebElement getMinTempDisplayWebElement(int noOfDay) {
    	return  getDriver().findElement(By.cssSelector("[data-test='minimum-"+noOfDay+"']"));
	}
}
