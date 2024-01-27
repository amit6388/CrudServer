import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

class ContactUs extends Component {
  
  render() {
    return (
    <Container>
     <center>   <h1><span style={{color:"red"}}>SendE</span>mail</h1></center>
     <div className='row'>
     <div className='col-sm-3'>  </div>
     <div className='col-sm-6'> 
     <Form action='https://formspree.io/f/mnqynqvp' method='POST'>
<Form.Group controlId="form.Name">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" name="name" placeholder="Enter name" />
</Form.Group>
<Form.Group controlId="form.Email">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name="name" placeholder="name@example.com" />
</Form.Group>
<Form.Group controlId="form.Textarea">
    <Form.Label>Comment</Form.Label>
    <Form.Control as="textarea" name="textarea" rows={3} />
</Form.Group><br/>
<input type="submit" className='btn btn-success' value="Send" />
</Form>
     
      </div>
     <div className='col-sm-3'>  </div>

        </div>
        <br/> <br/>
    </Container>
  
    );
  }
       
}

export default ContactUs;