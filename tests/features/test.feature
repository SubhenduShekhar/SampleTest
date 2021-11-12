Feature: Test Website

    Scenario: As a user, I should land on registration form page
    Given I am on home screen
    When I click on signin button
    And I enter email "test5.user@email.com"
    And I click on create and account button
    Then Registration form page should be displayed
    
    Scenario: As a user, I should be able to register succssfully
    Given I am on registrationform screen
    When I fill registration form with below details

    | FirstName   | Test                      |        
    | LastName    | User                      | 
    | Email       | test5.user@email.com      | 
    | Password    | Password1                 |
    | Day         | 10                        | 
    | Month       | 3                         | 
    | Year        | 1996                      | 
    | Address1    | 666, 1st Cross, Bangalore | 
    | City        | Bangalore                 | 
    | State       | 3                         | 
    | PostCode    | 56003                     | 
    | Country     | India                     | 
    | PhoneMobile | 9876543210                | 
    | Alias       | Sample Alias for testing  |
    
    And I click on register button
    Then I should be able to register successfully

    Scenario: As a user, I should be able to logout
    Given I am on any screen
    When I click on signout link
    Then I should be able to logout successfully

    Scenario: As a user, I should be able to login
    Given I am on any screen
    When I click on signin button
    And I enter credentials
    And I click on signin button for login
    Then I should be able to login successfully

    Scenario: As a user, I should be able to select items
    Given I have logged in successfully
    When I select t-shirts of name "Faded Short Sleeve T-shirts"
    And I click on add to cart
    Then I should be able to add to cart successfully

    Scenario: As a user, I should be able to checkout
    Given I have added products to cart
    When I proceed to checkout
    Then I should be able checkout successfully

    Scenario: As a user, I should be able to logout
    Given I am on any screen
    When I click on signout link
    Then I should be able to logout successfully