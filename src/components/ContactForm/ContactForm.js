// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  onChengeValue = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    const id = nanoid();
    this.props.onSubmit({ id, ...this.state });
    this.resetForm();
  };
  resetForm() {
    this.setState({ name: '', number: '' });
  }
  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.title}>
          name
          <input
            className={s.input}
            type="text"
            name="name"
            onChange={this.onChengeValue}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={s.title}>
          number
          <input
            className={s.input}
            type="tel"
            name="number"
            onChange={this.onChengeValue}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={s.button} type="submit">
          add to contact
        </button>
      </form>
    );
  }
}
