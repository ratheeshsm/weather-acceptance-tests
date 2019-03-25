$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CheckWeather.feature");
formatter.feature({
  "line": 2,
  "name": "Check weather for different cities",
  "description": "",
  "id": "check-weather-for-different-cities",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Verify the weather information of a city of users choice",
  "description": "",
  "id": "check-weather-for-different-cities;verify-the-weather-information-of-a-city-of-users-choice",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "the user is in the 5 Weather Forecast page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user enters the city name \u003ccity_name\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the 5 day weather forecast for the selected city is \u003cdisplayed\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "check-weather-for-different-cities;verify-the-weather-information-of-a-city-of-users-choice;",
  "rows": [
    {
      "cells": [
        "city_name",
        "displayed"
      ],
      "line": 10,
      "id": "check-weather-for-different-cities;verify-the-weather-information-of-a-city-of-users-choice;;1"
    },
    {
      "cells": [
        "Edinburgh",
        "shown"
      ],
      "line": 11,
      "id": "check-weather-for-different-cities;verify-the-weather-information-of-a-city-of-users-choice;;2"
    },
    {
      "cells": [
        "Glasgow",
        "shown"
      ],
      "line": 12,
      "id": "check-weather-for-different-cities;verify-the-weather-information-of-a-city-of-users-choice;;3"
    },
    {
      "cells": [
        "Aberdeen",
        "shown"
      ],
      "line": 13,
      "id": "check-weather-for-different-cities;verify-the-weather-information-of-a-city-of-users-choice;;4"
    },
    {
      "cells": [
        "Dundee",
        "shown"
      ],
      "line": 14,
      "id": "check-weather-for-different-cities;verify-the-weather-information-of-a-city-of-users-choice;;5"
    },
    {
      "cells": [
        "Perth",
        "shown"
      ],
      "line": 15,
      "id": "check-weather-for-different-cities;verify-the-weather-information-of-a-city-of-users-choice;;6"
    },
    {
      "cells": [
        "Stirling",
        "shown"
      ],
      "line": 16,
      "id": "check-weather-for-different-cities;verify-the-weather-information-of-a-city-of-users-choice;;7"
    },
    {
      "cells": [
        "InvalidName",
        "not shown"
      ],
      "line": 17,
      "id": "check-weather-for-different-cities;verify-the-weather-information-of-a-city-of-users-choice;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2385094599,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify the weather information of a city of users choice",
  "description": "",
  "id": "check-weather-for-different-cities;verify-the-weather-information-of-a-city-of-users-choice;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user is in the 5 Weather Forecast page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user enters the city name Edinburgh",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the 5 day weather forecast for the selected city is shown",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5 Weather Forecast",
      "offset": 19
    }
  ],
  "location": "HomePageStepDef.the_user_is_in_the_weather_application_home_page(String)"
});
formatter.result({
  "duration": 71538845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Edinburgh",
      "offset": 30
    }
  ],
  "location": "HomePageStepDef.the_user_enter_the_city_name(String)"
});
formatter.result({
  "duration": 1026165901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 4
    },
    {
      "val": "shown",
      "offset": 52
    }
  ],
  "location": "HomePageStepDef.the_user_gets_a_day_weather_forecast_for_the_selected_city(int,String)"
});
formatter.result({
  "duration": 99956638,
  "status": "passed"
});
formatter.after({
  "duration": 161268346,
  "status": "passed"
});
formatter.before({
  "duration": 1910897983,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify the weather information of a city of users choice",
  "description": "",
  "id": "check-weather-for-different-cities;verify-the-weather-information-of-a-city-of-users-choice;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user is in the 5 Weather Forecast page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user enters the city name Glasgow",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the 5 day weather forecast for the selected city is shown",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5 Weather Forecast",
      "offset": 19
    }
  ],
  "location": "HomePageStepDef.the_user_is_in_the_weather_application_home_page(String)"
});
formatter.result({
  "duration": 4238517,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Glasgow",
      "offset": 30
    }
  ],
  "location": "HomePageStepDef.the_user_enter_the_city_name(String)"
});
formatter.result({
  "duration": 880484471,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 4
    },
    {
      "val": "shown",
      "offset": 52
    }
  ],
  "location": "HomePageStepDef.the_user_gets_a_day_weather_forecast_for_the_selected_city(int,String)"
});
formatter.result({
  "duration": 100096789,
  "status": "passed"
});
formatter.after({
  "duration": 138921773,
  "status": "passed"
});
formatter.before({
  "duration": 1823688217,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify the weather information of a city of users choice",
  "description": "",
  "id": "check-weather-for-different-cities;verify-the-weather-information-of-a-city-of-users-choice;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user is in the 5 Weather Forecast page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user enters the city name Aberdeen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the 5 day weather forecast for the selected city is shown",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5 Weather Forecast",
      "offset": 19
    }
  ],
  "location": "HomePageStepDef.the_user_is_in_the_weather_application_home_page(String)"
});
formatter.result({
  "duration": 5738822,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aberdeen",
      "offset": 30
    }
  ],
  "location": "HomePageStepDef.the_user_enter_the_city_name(String)"
});
formatter.result({
  "duration": 952613953,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 4
    },
    {
      "val": "shown",
      "offset": 52
    }
  ],
  "location": "HomePageStepDef.the_user_gets_a_day_weather_forecast_for_the_selected_city(int,String)"
});
formatter.result({
  "duration": 98974842,
  "status": "passed"
});
formatter.after({
  "duration": 138735828,
  "status": "passed"
});
formatter.before({
  "duration": 1962105028,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify the weather information of a city of users choice",
  "description": "",
  "id": "check-weather-for-different-cities;verify-the-weather-information-of-a-city-of-users-choice;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user is in the 5 Weather Forecast page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user enters the city name Dundee",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the 5 day weather forecast for the selected city is shown",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5 Weather Forecast",
      "offset": 19
    }
  ],
  "location": "HomePageStepDef.the_user_is_in_the_weather_application_home_page(String)"
});
formatter.result({
  "duration": 4817303,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dundee",
      "offset": 30
    }
  ],
  "location": "HomePageStepDef.the_user_enter_the_city_name(String)"
});
formatter.result({
  "duration": 843476538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 4
    },
    {
      "val": "shown",
      "offset": 52
    }
  ],
  "location": "HomePageStepDef.the_user_gets_a_day_weather_forecast_for_the_selected_city(int,String)"
});
formatter.result({
  "duration": 97466638,
  "status": "passed"
});
formatter.after({
  "duration": 139812279,
  "status": "passed"
});
formatter.before({
  "duration": 1897865287,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify the weather information of a city of users choice",
  "description": "",
  "id": "check-weather-for-different-cities;verify-the-weather-information-of-a-city-of-users-choice;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user is in the 5 Weather Forecast page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user enters the city name Perth",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the 5 day weather forecast for the selected city is shown",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5 Weather Forecast",
      "offset": 19
    }
  ],
  "location": "HomePageStepDef.the_user_is_in_the_weather_application_home_page(String)"
});
formatter.result({
  "duration": 4006218,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Perth",
      "offset": 30
    }
  ],
  "location": "HomePageStepDef.the_user_enter_the_city_name(String)"
});
formatter.result({
  "duration": 836668130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 4
    },
    {
      "val": "shown",
      "offset": 52
    }
  ],
  "location": "HomePageStepDef.the_user_gets_a_day_weather_forecast_for_the_selected_city(int,String)"
});
formatter.result({
  "duration": 99632445,
  "status": "passed"
});
formatter.after({
  "duration": 141387319,
  "status": "passed"
});
formatter.before({
  "duration": 1910420275,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify the weather information of a city of users choice",
  "description": "",
  "id": "check-weather-for-different-cities;verify-the-weather-information-of-a-city-of-users-choice;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user is in the 5 Weather Forecast page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user enters the city name Stirling",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the 5 day weather forecast for the selected city is shown",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5 Weather Forecast",
      "offset": 19
    }
  ],
  "location": "HomePageStepDef.the_user_is_in_the_weather_application_home_page(String)"
});
formatter.result({
  "duration": 3803631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stirling",
      "offset": 30
    }
  ],
  "location": "HomePageStepDef.the_user_enter_the_city_name(String)"
});
formatter.result({
  "duration": 961643046,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 4
    },
    {
      "val": "shown",
      "offset": 52
    }
  ],
  "location": "HomePageStepDef.the_user_gets_a_day_weather_forecast_for_the_selected_city(int,String)"
});
formatter.result({
  "duration": 97876956,
  "status": "passed"
});
formatter.after({
  "duration": 142084583,
  "status": "passed"
});
formatter.before({
  "duration": 1875212633,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify the weather information of a city of users choice",
  "description": "",
  "id": "check-weather-for-different-cities;verify-the-weather-information-of-a-city-of-users-choice;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user is in the 5 Weather Forecast page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user enters the city name InvalidName",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the 5 day weather forecast for the selected city is not shown",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5 Weather Forecast",
      "offset": 19
    }
  ],
  "location": "HomePageStepDef.the_user_is_in_the_weather_application_home_page(String)"
});
formatter.result({
  "duration": 2874475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "InvalidName",
      "offset": 30
    }
  ],
  "location": "HomePageStepDef.the_user_enter_the_city_name(String)"
});
formatter.result({
  "duration": 980960052,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 4
    },
    {
      "val": "not shown",
      "offset": 52
    }
  ],
  "location": "HomePageStepDef.the_user_gets_a_day_weather_forecast_for_the_selected_city(int,String)"
});
formatter.result({
  "duration": 66053490,
  "status": "passed"
});
formatter.after({
  "duration": 140077375,
  "status": "passed"
});
formatter.before({
  "duration": 2475308342,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify the different days weather displayed for city of users choice",
  "description": "",
  "id": "check-weather-for-different-cities;verify-the-different-days-weather-displayed-for-city-of-users-choice",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "the user is in the 5 Weather Forecast page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "the user enters the city name Edinburgh",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "the user gets a below days weather forecast for the selected city",
  "rows": [
    {
      "comments": [
        {
          "line": 24,
          "value": "#| day\t |dayValue|"
        }
      ],
      "cells": [
        "1",
        "Tue"
      ],
      "line": 25
    },
    {
      "cells": [
        "2",
        "Wed"
      ],
      "line": 26
    },
    {
      "cells": [
        "3",
        "Thu"
      ],
      "line": 27
    },
    {
      "cells": [
        "4",
        "Fri"
      ],
      "line": 28
    },
    {
      "cells": [
        "5",
        "Sat"
      ],
      "line": 29
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5 Weather Forecast",
      "offset": 19
    }
  ],
  "location": "HomePageStepDef.the_user_is_in_the_weather_application_home_page(String)"
});
formatter.result({
  "duration": 4129873,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Edinburgh",
      "offset": 30
    }
  ],
  "location": "HomePageStepDef.the_user_enter_the_city_name(String)"
});
formatter.result({
  "duration": 1009206635,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.the_user_gets_a_below_days_weather_forecast_for_the_selected_city(DataTable)"
});
formatter.result({
  "duration": 105537124,
  "status": "passed"
});
formatter.after({
  "duration": 143111634,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 32,
  "name": "Verify the user is able to expand and collapse weather forcast",
  "description": "",
  "id": "check-weather-for-different-cities;verify-the-user-is-able-to-expand-and-collapse-weather-forcast",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 33,
  "name": "the user is in the 5 Weather Forecast page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "the user enters the city name \u003ccity_name\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "the user clicks on a day \u003cday_num\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the detailed weather report for the day \u003cday_num\u003e is shown",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "the user clicks on a day \u003cday_num\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "the detailed weather report for the day \u003cday_num\u003e is hidden",
  "keyword": "Then "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "check-weather-for-different-cities;verify-the-user-is-able-to-expand-and-collapse-weather-forcast;",
  "rows": [
    {
      "cells": [
        "city_name",
        "day_num"
      ],
      "line": 40,
      "id": "check-weather-for-different-cities;verify-the-user-is-able-to-expand-and-collapse-weather-forcast;;1"
    },
    {
      "cells": [
        "Edinburgh",
        "1"
      ],
      "line": 41,
      "id": "check-weather-for-different-cities;verify-the-user-is-able-to-expand-and-collapse-weather-forcast;;2"
    },
    {
      "cells": [
        "Glasgow",
        "2"
      ],
      "line": 42,
      "id": "check-weather-for-different-cities;verify-the-user-is-able-to-expand-and-collapse-weather-forcast;;3"
    },
    {
      "cells": [
        "Aberdeen",
        "3"
      ],
      "line": 43,
      "id": "check-weather-for-different-cities;verify-the-user-is-able-to-expand-and-collapse-weather-forcast;;4"
    },
    {
      "cells": [
        "Stirling",
        "4"
      ],
      "line": 44,
      "id": "check-weather-for-different-cities;verify-the-user-is-able-to-expand-and-collapse-weather-forcast;;5"
    },
    {
      "cells": [
        "Dundee",
        "5"
      ],
      "line": 45,
      "id": "check-weather-for-different-cities;verify-the-user-is-able-to-expand-and-collapse-weather-forcast;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1928429320,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Verify the user is able to expand and collapse weather forcast",
  "description": "",
  "id": "check-weather-for-different-cities;verify-the-user-is-able-to-expand-and-collapse-weather-forcast;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "the user is in the 5 Weather Forecast page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "the user enters the city name Edinburgh",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "the user clicks on a day 1",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the detailed weather report for the day 1 is shown",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "the user clicks on a day 1",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "the detailed weather report for the day 1 is hidden",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5 Weather Forecast",
      "offset": 19
    }
  ],
  "location": "HomePageStepDef.the_user_is_in_the_weather_application_home_page(String)"
});
formatter.result({
  "duration": 3908503,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Edinburgh",
      "offset": 30
    }
  ],
  "location": "HomePageStepDef.the_user_enter_the_city_name(String)"
});
formatter.result({
  "duration": 996185726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 25
    }
  ],
  "location": "HomePageStepDef.the_user_clicks_on_a_day(int)"
});
formatter.result({
  "duration": 1106948633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 40
    },
    {
      "val": "shown",
      "offset": 45
    }
  ],
  "location": "HomePageStepDef.the_detailed_weather_report_for_the_day_is_shown(int,String)"
});
formatter.result({
  "duration": 28922999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 25
    }
  ],
  "location": "HomePageStepDef.the_user_clicks_on_a_day(int)"
});
formatter.result({
  "duration": 1080866816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 40
    },
    {
      "val": "hidden",
      "offset": 45
    }
  ],
  "location": "HomePageStepDef.the_detailed_weather_report_for_the_day_is_shown(int,String)"
});
formatter.result({
  "duration": 22374454,
  "status": "passed"
});
formatter.after({
  "duration": 150962190,
  "status": "passed"
});
formatter.before({
  "duration": 1903408513,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Verify the user is able to expand and collapse weather forcast",
  "description": "",
  "id": "check-weather-for-different-cities;verify-the-user-is-able-to-expand-and-collapse-weather-forcast;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "the user is in the 5 Weather Forecast page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "the user enters the city name Glasgow",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "the user clicks on a day 2",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the detailed weather report for the day 2 is shown",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "the user clicks on a day 2",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "the detailed weather report for the day 2 is hidden",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5 Weather Forecast",
      "offset": 19
    }
  ],
  "location": "HomePageStepDef.the_user_is_in_the_weather_application_home_page(String)"
});
formatter.result({
  "duration": 3201908,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Glasgow",
      "offset": 30
    }
  ],
  "location": "HomePageStepDef.the_user_enter_the_city_name(String)"
});
formatter.result({
  "duration": 866071120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "HomePageStepDef.the_user_clicks_on_a_day(int)"
});
formatter.result({
  "duration": 1105596082,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 40
    },
    {
      "val": "shown",
      "offset": 45
    }
  ],
  "location": "HomePageStepDef.the_detailed_weather_report_for_the_day_is_shown(int,String)"
});
formatter.result({
  "duration": 28906557,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "HomePageStepDef.the_user_clicks_on_a_day(int)"
});
formatter.result({
  "duration": 1079798354,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 40
    },
    {
      "val": "hidden",
      "offset": 45
    }
  ],
  "location": "HomePageStepDef.the_detailed_weather_report_for_the_day_is_shown(int,String)"
});
formatter.result({
  "duration": 21379160,
  "status": "passed"
});
formatter.after({
  "duration": 153988869,
  "status": "passed"
});
formatter.before({
  "duration": 1868207454,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Verify the user is able to expand and collapse weather forcast",
  "description": "",
  "id": "check-weather-for-different-cities;verify-the-user-is-able-to-expand-and-collapse-weather-forcast;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "the user is in the 5 Weather Forecast page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "the user enters the city name Aberdeen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "the user clicks on a day 3",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the detailed weather report for the day 3 is shown",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "the user clicks on a day 3",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "the detailed weather report for the day 3 is hidden",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5 Weather Forecast",
      "offset": 19
    }
  ],
  "location": "HomePageStepDef.the_user_is_in_the_weather_application_home_page(String)"
});
formatter.result({
  "duration": 3605192,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aberdeen",
      "offset": 30
    }
  ],
  "location": "HomePageStepDef.the_user_enter_the_city_name(String)"
});
formatter.result({
  "duration": 944560885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 25
    }
  ],
  "location": "HomePageStepDef.the_user_clicks_on_a_day(int)"
});
formatter.result({
  "duration": 1100262262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 40
    },
    {
      "val": "shown",
      "offset": 45
    }
  ],
  "location": "HomePageStepDef.the_detailed_weather_report_for_the_day_is_shown(int,String)"
});
formatter.result({
  "duration": 23926280,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 25
    }
  ],
  "location": "HomePageStepDef.the_user_clicks_on_a_day(int)"
});
formatter.result({
  "duration": 1079890486,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 40
    },
    {
      "val": "hidden",
      "offset": 45
    }
  ],
  "location": "HomePageStepDef.the_detailed_weather_report_for_the_day_is_shown(int,String)"
});
formatter.result({
  "duration": 19141817,
  "status": "passed"
});
formatter.after({
  "duration": 151804229,
  "status": "passed"
});
formatter.before({
  "duration": 1894526044,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Verify the user is able to expand and collapse weather forcast",
  "description": "",
  "id": "check-weather-for-different-cities;verify-the-user-is-able-to-expand-and-collapse-weather-forcast;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "the user is in the 5 Weather Forecast page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "the user enters the city name Stirling",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "the user clicks on a day 4",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the detailed weather report for the day 4 is shown",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "the user clicks on a day 4",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "the detailed weather report for the day 4 is hidden",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5 Weather Forecast",
      "offset": 19
    }
  ],
  "location": "HomePageStepDef.the_user_is_in_the_weather_application_home_page(String)"
});
formatter.result({
  "duration": 3626561,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stirling",
      "offset": 30
    }
  ],
  "location": "HomePageStepDef.the_user_enter_the_city_name(String)"
});
formatter.result({
  "duration": 952020723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 25
    }
  ],
  "location": "HomePageStepDef.the_user_clicks_on_a_day(int)"
});
formatter.result({
  "duration": 1105967624,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 40
    },
    {
      "val": "shown",
      "offset": 45
    }
  ],
  "location": "HomePageStepDef.the_detailed_weather_report_for_the_day_is_shown(int,String)"
});
formatter.result({
  "duration": 29387779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 25
    }
  ],
  "location": "HomePageStepDef.the_user_clicks_on_a_day(int)"
});
formatter.result({
  "duration": 1077140866,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 40
    },
    {
      "val": "hidden",
      "offset": 45
    }
  ],
  "location": "HomePageStepDef.the_detailed_weather_report_for_the_day_is_shown(int,String)"
});
formatter.result({
  "duration": 19638644,
  "status": "passed"
});
formatter.after({
  "duration": 149520207,
  "status": "passed"
});
formatter.before({
  "duration": 1892357729,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Verify the user is able to expand and collapse weather forcast",
  "description": "",
  "id": "check-weather-for-different-cities;verify-the-user-is-able-to-expand-and-collapse-weather-forcast;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "the user is in the 5 Weather Forecast page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "the user enters the city name Dundee",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "the user clicks on a day 5",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the detailed weather report for the day 5 is shown",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "the user clicks on a day 5",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "the detailed weather report for the day 5 is hidden",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5 Weather Forecast",
      "offset": 19
    }
  ],
  "location": "HomePageStepDef.the_user_is_in_the_weather_application_home_page(String)"
});
formatter.result({
  "duration": 3077712,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dundee",
      "offset": 30
    }
  ],
  "location": "HomePageStepDef.the_user_enter_the_city_name(String)"
});
formatter.result({
  "duration": 843168314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 25
    }
  ],
  "location": "HomePageStepDef.the_user_clicks_on_a_day(int)"
});
formatter.result({
  "duration": 1108663910,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 40
    },
    {
      "val": "shown",
      "offset": 45
    }
  ],
  "location": "HomePageStepDef.the_detailed_weather_report_for_the_day_is_shown(int,String)"
});
formatter.result({
  "duration": 26609448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 25
    }
  ],
  "location": "HomePageStepDef.the_user_clicks_on_a_day(int)"
});
formatter.result({
  "duration": 1078872169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 40
    },
    {
      "val": "hidden",
      "offset": 45
    }
  ],
  "location": "HomePageStepDef.the_detailed_weather_report_for_the_day_is_shown(int,String)"
});
formatter.result({
  "duration": 20273031,
  "status": "passed"
});
formatter.after({
  "duration": 171887173,
  "status": "passed"
});
formatter.before({
  "duration": 1881572590,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Verify the summary weather report is correctly displayed",
  "description": "",
  "id": "check-weather-for-different-cities;verify-the-summary-weather-report-is-correctly-displayed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 48,
  "name": "the user is in the 5 Weather Forecast page",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "the 5 day weather forecast for the selected city is shown",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "the summary weather report is correct for the below days",
  "rows": [
    {
      "comments": [
        {
          "line": 51,
          "value": "#| cityName|day  |"
        }
      ],
      "cells": [
        "Edinburgh",
        "5"
      ],
      "line": 52
    },
    {
      "cells": [
        "Glasgow",
        "5"
      ],
      "line": 53
    },
    {
      "cells": [
        "Aberdeen",
        "5"
      ],
      "line": 54
    },
    {
      "cells": [
        "Stirling",
        "5"
      ],
      "line": 55
    },
    {
      "cells": [
        "Dundee",
        "5"
      ],
      "line": 56
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5 Weather Forecast",
      "offset": 19
    }
  ],
  "location": "HomePageStepDef.the_user_is_in_the_weather_application_home_page(String)"
});
formatter.result({
  "duration": 3569347,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 4
    },
    {
      "val": "shown",
      "offset": 52
    }
  ],
  "location": "HomePageStepDef.the_user_gets_a_day_weather_forecast_for_the_selected_city(int,String)"
});
formatter.result({
  "duration": 102996870,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.the_summary_weather_report_is_correct_for_the_below_days(DataTable)"
});
formatter.result({
  "duration": 46653752664,
  "status": "passed"
});
formatter.after({
  "duration": 135023905,
  "status": "passed"
});
});