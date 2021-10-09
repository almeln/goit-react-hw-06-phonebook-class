import React from 'react';
import { connect } from 'react-redux';
import css from './Filter.module.css';
import PropTypes from 'prop-types';
import { changeFilter } from 'redux/contacts/contacts-actions';

const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input
      className={css.filterInput}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(changeFilter(event.target.value)),
});

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
