$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("bdd/cucumber/features/wikipediaSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Wikipedia Search",
  "description": "",
  "id": "wikipedia-search",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "TDD search on wikipedia",
  "description": "",
  "id": "wikipedia-search;tdd-search-on-wikipedia",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I go to Wikipedia homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter the value Test-driven development on a field named search",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click the button go",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the page title contains Test-driven development",
  "keyword": "Then "
});
formatter.match({
  "location": "WebSteps.goToWikiPage()"
});
formatter.result({
  "duration": 5676883341,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test-driven development",
      "offset": 18
    },
    {
      "val": "search",
      "offset": 59
    }
  ],
  "location": "WebSteps.enterValueOnFieldByName(String,String)"
});
formatter.result({
  "duration": 232754174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "go",
      "offset": 19
    }
  ],
  "location": "WebSteps.clickButonByName(String)"
});
formatter.result({
  "duration": 566894633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test-driven development",
      "offset": 24
    }
  ],
  "location": "WebSteps.pageTitleIs(String)"
});
formatter.result({
  "duration": 9585695,
  "status": "passed"
});
});