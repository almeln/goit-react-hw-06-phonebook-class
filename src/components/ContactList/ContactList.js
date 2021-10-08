import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

import ContactItem from 'components/ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.contactItem}>
        <ContactItem
          name={name}
          number={number}
          onDelete={() => onDeleteContact(id)}
        />
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func,
};

export default ContactList;
