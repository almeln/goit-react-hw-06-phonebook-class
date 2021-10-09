import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-actions';

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

const getVisibleContacts = (allTodos, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allTodos.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
