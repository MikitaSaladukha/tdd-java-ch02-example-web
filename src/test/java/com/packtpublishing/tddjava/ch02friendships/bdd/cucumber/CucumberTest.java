package com.packtpublishing.tddjava.ch02friendships.bdd.cucumber;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


@RunWith(Cucumber.class)

@CucumberOptions(features = {"classpath:bdd/cucumber/features"},
                    format = {"pretty", "html:build/reports/cucumber-report"},
                    glue = {"com.packtpublishing.tddjava.ch02friendships.bdd.steps"})


public class CucumberTest {
    @BeforeClass
    public static void setup() {
        System.setProperty("webdriver.gecko.driver","/home/mikkita/IdeaProjects/tdd-java-ch02-example-web/geckodriver");
        System.setProperty("selenide.browser","Firefox");

    }
}

