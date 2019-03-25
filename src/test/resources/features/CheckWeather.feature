@test
Feature: Check weather for different cities


Scenario Outline: Verify the weather information of a city of users choice
	Given the user is in the 5 Weather Forecast page 
	When the user enters the city name <city_name>
	Then the 5 day weather forecast for the selected city is <displayed>
	Examples:
	| city_name     | displayed |
	| Edinburgh     | shown     |
	| Glasgow       | shown     |
	| Aberdeen      | shown     |
	| Dundee        | shown     |
	| Perth         | shown     |
	| Stirling      | shown     |
	| InvalidName   | not shown |

	
Scenario: Verify the different days weather displayed for city of users choice 
	Given the user is in the 5 Weather Forecast page 
	When the user enters the city name Edinburgh 
	Then the user gets a below days weather forecast for the selected city 
	   #| day	 |dayValue|
		| 1 	 | Tue    |
		| 2 	 | Wed    |
		| 3 	 | Thu    |
		| 4 	 | Fri    |
		| 5 	 | Sat    |


Scenario Outline: Verify the user is able to expand and collapse weather forcast
	Given the user is in the 5 Weather Forecast page 
	When the user enters the city name <city_name>
	And the user clicks on a day <day_num>
	Then the detailed weather report for the day <day_num> is shown
	When the user clicks on a day <day_num>
	Then the detailed weather report for the day <day_num> is hidden
	Examples:
    	| city_name | day_num |
        | Edinburgh | 1       |
        | Glasgow   | 2       |
        | Aberdeen  | 3       |
        | Stirling  | 4       |
        | Dundee    | 5       |

Scenario: Verify the summary weather report is correctly displayed
    Given the user is in the 5 Weather Forecast page
    When the 5 day weather forecast for the selected city is shown
    Then the summary weather report is correct for the below days
            #| cityName|day  |
    		| Edinburgh| 5 	 |
    		| Glasgow  | 5 	 |
    		| Aberdeen | 5 	 |
    		| Stirling | 5 	 |
    		| Dundee   | 5 	 |
