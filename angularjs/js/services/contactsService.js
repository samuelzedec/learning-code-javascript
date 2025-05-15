"use strict";

angular.module("contactList").factory("mockContacts", (mockOperators) => {
  const mock = [
    {
      name: "Pedro LIMA",
      phone: "(92) 99999-9998",
      color: "blue",
      date: new Date(),
      operator: mockOperators.getOperators()[1],
    },
    {
      name: "Marcos de Souza",
      phone: "(92) 99999-9995",
      color: "red",
      date: new Date(),
      operator: mockOperators.getOperators()[4],
    },
    {
      name: "Julio da CUNHA",
      phone: "(92) 99999-9997",
      color: "green",
      date: new Date(),
      operator: mockOperators.getOperators()[0],
    },
    {
      name: "Jonathan DE Lopes",
      phone: "(92) 99999-9992",
      color: "purple",
      date: new Date(),
      operator: mockOperators.getOperators()[2],
    },
  ];

  const _getContacts = () => mock;

  const _addContact = (contact) => mock.push(contact);

  const _removeContacts = (contacts) => {
    const filtered = contacts.filter(contact => !contact.selected);
    mock.splice(0, mock.length, ...filtered);
  };

  const _checkSelected = () => mock.some(contact => contact.selected);

  return {
    getContacts: _getContacts,
    addContact: _addContact,
    removeContacts: _removeContacts,
    checkSelected: _checkSelected
  };
});
