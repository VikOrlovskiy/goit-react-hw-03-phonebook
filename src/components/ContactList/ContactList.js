import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import ContactListItem from '../ContactListItem';

export default function ContactList({ contacts, deleteContact }) {
  console.log(contacts.length);
  return (
    <ul className={s.list}>
      {contacts.length > 0 ? (
        contacts.map(({ id, name, number }, index) => (
          <li key={id} className={s.list__item}>
            <ContactListItem
              id={id}
              index={index}
              name={name}
              number={number}
              deleteContact={deleteContact}
            />
          </li>
        ))
      ) : (
        <li className={s.emptyListContainer}>
          <p className={s.emptyList}> no contacts in list</p>
        </li>
      )}
    </ul>
  );
}
ContactList.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  deleteContact: PropTypes.func,
};
