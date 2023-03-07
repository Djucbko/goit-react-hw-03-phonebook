import PropTypes from 'prop-types';
import { Component } from 'react';

import { Form, Field, Input, Button } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
  };

  handleSubmit = event => {
    const { onSubmit } = this.props;
    event.preventDefault();
    const form = event.currentTarget;
    const { name, number } = event.target.elements;
    onSubmit(name.value, number.value);
    form.reset();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Field>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          ></Input>
          <Field>
            Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            ></Input>
          </Field>
        </Field>

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};