package stepdefs;

import java.io.IOException;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import utils.Base;

public class Hooks extends Base {

    @Before
    public void initialize() throws IOException

    {
	initializeDriver();
    }

    @After
    public void tearDown() {
        if (getDriver() != null) {
            getDriver().close();
            getDriver().quit();
        }
    }
}
