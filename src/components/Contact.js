import React from 'react'
import MainSec from './MainSec'
import Form from 'react-bootstrap/Form';
import Axios from 'axios';

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

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target);

    this.setState({
      disabled: true,
    });

Axios.post('http://localhost:5454/api/email', this.state)
.then(res => {
    if(res.data.success) {
        this.setState({
            disabled: true,
            emailSent: true
        });
    } else {
        this.setState({
            disabled: false,
            emailSent: false
        });
    }
})
.catch(err => {
    console.log(err);

    this.setState({
        disabled: false,
        emailSent: false
    });
})

}



  render() {
    return (
      <div>
        <MainSec title={this.props.title} />

        <content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="Full-name" style={{color:'#5cb85c'}}>Full Name</Form.Label>
              <Form.Control id="Full Name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email" style={{color:'#5cb85c'}}>Email</Form.Label>
              <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="message" style={{color:'#5cb85c'}}>Message</Form.Label>
              <Form.Control id="message" name="message" as="textarea" rows="5" value={this.state.message} onChange={this.handleChange} />
            </Form.Group>

            <button type="submit" className="btn btn-outline-success d-inline-block" disabled={this.state.disabled}>Send</button>

            {this.state.emailSent === true && <p className="d-inline success-msg px-5" style={{color:'#5cb85c'}}>Email Sent</p>}
            {this.state.emailSent === false && <p className="d-inline err-msg px-5" style={{color:'red'}}>Email Not Sent</p>}

          </Form>
        </content>
      </div>
    );
  }
}