import PropTypes from 'prop-types';
import s from './Filter.module.css';

export default function Filter({ value, onChengeValue }) {
  return (
    <label className={s.title}>
      find contact by name
      <input
        onChange={onChengeValue}
        className={s.input}
        type="text"
        name="filter"
        value={value}
      />
    </label>
  );
}
Filter.propTypes = {
  value: PropTypes.string,
  onChengeValue: PropTypes.func,
};
