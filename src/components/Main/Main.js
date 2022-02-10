import React, { Component } from 'react';

import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import s from './Main.module.css';

export default class Main extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const value = JSON.parse(localStorage.getItem('contacts'));
    if (value === null) {
      return;
    }
    this.setState({ contacts: value.contacts });
  }
  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem(
        'contacts',
        JSON.stringify({
          contacts: contacts,
        }),
      );
    }
  }
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
