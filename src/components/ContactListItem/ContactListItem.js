import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

export default function ContactListItem({
  id,
  name,
  number,
  index,
  deleteContact,
}) {
  return (
    <div className={s.item__container}>
      <span>{index + 1}</span>
      <span>{name}</span>
      <span>{number}</span>
      <button className={s.button} onClick={() => deleteContact(id)}>
        delete
      </button>
    </div>
  );
}
ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  index: PropTypes.number,
  deleteContact: PropTypes.func,
};
