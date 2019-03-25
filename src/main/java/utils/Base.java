package utils;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import com.pages.actions.GenericActions;
import com.pages.actions.HomePageActions;


public class Base {

	private static WebDriver driver;
	public static void initializeDriver() throws IOException

	{
		Properties prop = new Properties();
		FileInputStream fis = new FileInputStream("src/main/resources/utilities/properties/config.properties");
		prop.load(fis);
		String osName = System.getProperty("os.name");
		String browserName = prop.getProperty("browser");

		if (osName != null && osName.startsWith("Mac")) {
			if ("chrome".equals(browserName)) {
				System.setProperty("webdriver.chrome.driver",
						"src/main/resources/utilities/drivers/chromedriver_mac");
				driver = new ChromeDriver();
			} else if ("firefox".equals(browserName)) {
				System.setProperty("webdriver.gecko.driver",
						"src/main/resources/utilities/drivers/geckodriver_mac");
				driver = new FirefoxDriver();
			}
		} else if (osName != null && osName.startsWith("Windows"))
			if ("chrome".equals(browserName)) {
				System.setProperty("webdriver.chrome.driver",
						"src/main/resources/utilities/drivers/chromedriver_win.exe");
				driver = new ChromeDriver();
			}
			else if ("firefox".equals(browserName)) {
				System.setProperty("webdriver.gecko.driver",
						"src/main/resources/utilities/drivers/geckodriver_win.exe");
				driver = new FirefoxDriver();
			}
		driver.get(prop.getProperty("URL"));
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
	}
	
	public WebDriver getDriver() {
		
		return driver;
	}
}
