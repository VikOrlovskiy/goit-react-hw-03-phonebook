import React, { Component } from 'react';

import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import s from './Main.module.css';

export default class Main extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };
  addContact = newContact => {
    const findinList = this.state.contacts.find(
      ({ name }) =>
        newContact.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
    );
    if (findinList) {
      alert(`${findinList.name} is alredy in contact`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };
  onChengeValue = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  filtredLIst = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLocaleLowerCase();
    return contacts.filter(({ name }) => {
      return name.toLocaleLowerCase().includes(normalizeFilter);
    });
  };
  render() {
    const filtredLIst = this.filtredLIst();
    const { filter } = this.state;
    return (
      <div className={s.wraper}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2 className={s.subtitle}>Contacts</h2>
        <Filter value={filter} onChengeValue={this.onChengeValue} />
        <ContactList
          contacts={filtredLIst}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
