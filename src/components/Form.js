import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import css from "./style.module.css";

class Form extends Component {
  // ToDo contact
  state = {
    name: "",
    number: "",
  };

  // ToDo methods
  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;

    const contact = { name: name, number: number, id: uuidv4() };

    this.props.users.filter((w) => w.name.toLowerCase() == name.toLowerCase()).length == 0
      ? this.props.addNewContact(contact)
      : alert(`${name} is alredy in contacs`);

    this.claerForm();
  };

  claerForm = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  // ToDo DOM tree
  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          value={this.state.name}
          onChange={this.handleChange}
          required
        />

        <label htmlFor="number">Phone</label>
        <input
          id="number"
          name="number"
          type="tel"
          placeholder="Enter your phone"
          value={this.state.number}
          onChange={this.handleChange}
          required
        />

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

// ToDo props defoult & props type
Form.defaultProps = {
  users: [{ id: "id-0", name: "your name", number: "your number" }],
};

Form.propTypes = {
  users: PropTypes.array,
};

export default Form;
