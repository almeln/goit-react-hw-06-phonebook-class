import React from 'react';
import PropTypes from 'prop-types';

import css from './ContactItem.module.css';

const ContactItem = ({ name, number, onDelete }) => (
  <>
    <p>
      <span className={css.contactItemName}>{name}:</span>
      <span className={css.contactItemNumber}>{number}</span>
      <button type="button" className={css.deleteBtn} onClick={onDelete}>
        Delete
      </button>
    </p>
  </>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
