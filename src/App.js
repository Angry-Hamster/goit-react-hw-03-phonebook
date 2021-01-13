import React, { Component } from "react";

import "./App.css";
import Contacts from "./components/Contacts";
import Form from "./components/Form";
import Filter from "./components/Filter";

class App extends Component {
  // ToDo contacts
  state = {
    contacts: [
      // ! Contacts 
    ],
    filter: "",
  };

  // ToDo methods
  addNewContact = (user) => {
    this.setState((prev) => ({ contacts: [...prev.contacts, user]}));
  };

  getFilter = (filter) => {
    this.setState({ filter: filter });
  };

  deleteContact = (id) => {
    const { contacts } = this.state;
    this.setState({ contacts: contacts.filter(w => w.id != id) });
  };

  // ToDo livecicle

  componentDidMount(){
    // ? load JSON to localStorege
    window.addEventListener("beforeunload", () => {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    });

    // ? unload JSON of localStorege
    window.addEventListener("load", () => {
      this.setState({contacts: JSON.parse(localStorage.getItem('contacts'))})
    });
  }

  // ToDo DOM tree
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Form addNewContact={this.addNewContact} users={this.state.contacts} />

        <h2>Contacts</h2>
        <Filter filter={this.getFilter} />
        <Contacts users={this.state} deleteContact={this.deleteContact} />
      </>
    );
  }
}

export default App;