Feature: Demo Feature

  This is a description
  second line of description

  Scenario: Should load an example page
    Given I open an example page
    Then I see the title "Example"

  Scenario Outline: Should load an example page
    Given I open an example page
    Then I see the title "<title>"

    Examples:
      | title |
      | Example |