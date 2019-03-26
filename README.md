This is the user acceptance automation for testing 5 day weather forecast for a given location.

### Test Automation Folder Structure

Feature Files             - /weather-acceptance-tests/src/test/resources/features

Step Definition Files     - /weather-acceptance-tests/src/test/java/stepdefs

Runner Class              - /weather-acceptance-tests/src/test/java/runner

Page Actions and Locators - /weather-acceptance-tests/src/main/java

Drivers and Properties    - /weather-acceptance-tests/src/main/resources/utilities

Cucumner reports          - /weather-acceptance-tests/target/cucumber

### Prerequisite Requirements

  * You will need maven to be installed
  * You will need Chrome to be installed
  * You can run this application either on Mac or Windows and not on Linux
 
### How to build and execute the solution

Run the application
*  $ npm run develop

Go to project HOME folder(/weather-acceptance-tests)
*  $ mvn clean install

Results should look like  below

14 Scenarios (14 passed)
57 Steps (57 passed)
   

### Test Automation Features

* Verify the weather information of the selected city
* Verify the different days weather is displayed for the selected city 
* Verify the user is able to expand and collapse weather forcast for the selected cities
* Verify the below summary weather report is correctly displayed for the selected cities
  * Most dominant (or current) condition
  * Most dominant (or current) wind speed and direction
  * Aggregate rainfall
  * Minimum and maximum temperatures
