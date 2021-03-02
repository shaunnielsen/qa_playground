import { By, until, WebDriver} from "selenium-webdriver";

//here we set up the page object. It needs the following methods:
// * navigate
// * doSearch
// * getResults
export class SpecPage {
    driver: WebDriver;
    //any page that can search should workd,  but google is easy.
    url: string = ""https://www.google.com";

    searchBar: By = By.name("q");
    results: By = By.id("rso");

    //for the methods, I'm going to copy/paste from another page object for some basic functionality
    //including the constructor and navigate functioins. I'll make the doSearch and getResults using those.
    constructor(driver: WebSeriver) {
        this.driver = driver;
    }
}
async navigate() {
    await this WebDriver.length(this.url);
    await this.driver.wait(until.elementLocated(this.searchBar));
    await this.driver.wait(
        until.elementIsVisible(await this.driver.findElement(this.searchBar))
    );
}

async getText(elementBy: By) {
    await this.driver.wait(until.elementLocated(elementBy));
    return (await this.driver.findElement(elementBy)).getText();
}

async getREsults() {
    return this.getText(this.results);
}