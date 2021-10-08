import React, { Component } from 'react';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    console.log(value);
    console.log(name);
    // this.setState({ name: event.currentTarget.value })
    // Вычисляемые свойства
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    const { state } = this;

    event.preventDefault();
    console.log(state);
    this.props.onSubmit(state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { handleSubmit, handleInputChange } = this;

    return (
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.formInputLabel}>
          Name
          <input
            className={css.formInput}
            type="text"
            name="name"
            value={this.state.name}
            onChange={handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={css.formInputLabel}>
          Number
          <input
            className={css.formInput}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button className={css.formInputBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
