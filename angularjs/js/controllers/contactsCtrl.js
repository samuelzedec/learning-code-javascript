"use strict";

angular.module("contactList").controller("contactCtrl", ($scope, mockOperators, mockContacts, serialGenerator, config) => {
  $scope.error = "Internal server error - Status Code 500";
  $scope.title = "Lista Telefônica";
  $scope.class = "selected";
  $scope.config = config.baseURL;
  $scope.operators = mockOperators.getOperators();
  $scope.contacts = mockContacts.getContacts();

  $scope.addContact = (contact) => {
    contact.serial = serialGenerator.generate();
    mockContacts.addContact(angular.copy(contact));
    $scope.contact = {}; 
    $scope.contactForm.$setPristine();
  };

  $scope.removeContact = (contacts) =>
    mockContacts.removeContacts(contacts);

  $scope.selectedContacts = () =>
    mockContacts.checkSelected();

  $scope.organize = (field) => {
    $scope.organizationCriteria = field;
    $scope.organizationDirection = !$scope.organizationDirection;
  };
});


