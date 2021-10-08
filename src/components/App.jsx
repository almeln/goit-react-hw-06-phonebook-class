import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import toast, { Toaster } from 'react-hot-toast';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Container from './Container';
import Filter from './Filter';

class App extends Component {
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: ''
    }

    // Фазы жизненного цикла
    componentDidMount() {
        console.log('App componentDidMount');

        const contacts = localStorage.getItem('contacts');
        const parsedContacts = JSON.parse(contacts);

        if (parsedContacts) {
            console.log(parsedContacts);
            this.setState({ contacts: parsedContacts });
        };
    };

    // Фазы жизненного цикла
    componentDidUpdate(prevProps, prevState) {
        const { contacts } = this.state;

        console.log('App componentDidUpdate');
        // До обновления
        console.log('prevState', prevState);
        // После обновления
        console.log('state', this.state);

        if (contacts !== prevState.contacts) {
            console.log('Обновилось поле контактов, записываю контакты в хранилище');

            localStorage.setItem('contacts', JSON.stringify(contacts));
        };
    }

    formSubmitHandler = data => {
        console.log(data);

        // Добавление контакта
        const contact = {
            id: uuidv4(),
            name: data.name,
            number: data.number,
        };

        // Проверка на дублирование имени
        const doubleContact = this.state.contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase());
        
        if (doubleContact) {
            // alert(`${data.name} is alredy in contacts.`);
            toast.error(`${data.name} is alredy in contacts.`);
            return;
        };

        // this.setState(prevState => ({
        //     contacts: [contact, ...prevState.contacts]
        // }));

        // Деструктуризация
        this.setState(({ contacts }) => ({
            contacts: [contact, ...contacts]
        }));
    };

    changeFilter = event => {
        this.setState({filter: event.currentTarget.value});
    };

    getVisibleContacts = () => {
        const { filter, contacts } = this.state;

        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
        );
    };

    deleteContact = contactId => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact => contact.id !== contactId)
        }));
    };

    render() {
        const { formSubmitHandler, changeFilter, deleteContact, getVisibleContacts } = this;
        const visibleContacts = getVisibleContacts();

        // Фазы жизненного цикла
        console.log('App render');

        return (
            <Container>
                <Toaster/>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={formSubmitHandler}></ContactForm>
                <h2>Contacts</h2>
                <Filter value={this.state.filter} onChange={changeFilter}></Filter>
                <ContactList 
                    contacts={visibleContacts}
                    onDeleteContact={deleteContact}
                ></ContactList>
            </Container>
        )
    }
};

export default App;