package com.study.cucumber.steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class BaseSteps {

	private WebDriver driver;
	public static ThreadLocal<WebDriver> dr = new ThreadLocal<WebDriver>();

	public static WebDriver getDriver() {
		return dr.get();
	}

	public static void setDriver(WebDriver driver) {
		dr.set(driver);
	}

	protected void startBrowser(String browser) {
		if (browser.equals("chrome"))

		{
			System.out.println("Launching from TC_1: " + browser);
			System.setProperty("webdriver.chrome.driver",
					"D:\\eclipse-workspace\\workspace2\\CucumberBDDParallel\\src\\test\\resources\\executable\\chromedriver.exe");
			this.driver = new ChromeDriver();
		} else if (browser.equals("firefox")) {
			System.out.println("Launching from TC_1: " + browser);
			System.setProperty("webdriver.firefox.marionette",
					"D:\\eclipse-workspace\\workspace2\\CucumberBDDParallel\\src\\test\\resources\\executable\\geckodriver.exe");
			this.driver = new FirefoxDriver();
		}
		setDriver(driver);
		getDriver().manage().window().maximize();
		getDriver().manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}

	protected void navigateToURL(String url) {
		getDriver().navigate().to(url);

	}

	protected void quit() {
		getDriver().quit();
	}

}
