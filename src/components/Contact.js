import React from 'react'
import Hero from './Hero'
import Form from 'react-bootstrap/Form';

export class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      disabled: false,
      emailSent: null,
    }
  }
  render() {
    return (
      <div>
        <Hero title={this.props.title} />

        <content>
          <Form >
            <Form.Group>
              <Form.Label htmlFor="Full-name">Full Name</Form.Label>
              <Form.Control id="Full Name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
            </Form.Group>
          </Form>
        </content>
      </div>
    )
  }
}