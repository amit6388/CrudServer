import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
 import { Link } from 'react-router-dom';

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"> <img
          className="d-block w-100"
          src= "images/img/1.jpg"
          height="40px"
          style={{borderRadius:"20%"}}
          alt="First slide"
        /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link exact as={Link} to="/">Home</Nav.Link>
            <Nav.Link  as={Link} to="/Users">Users</Nav.Link>
            
            <Nav.Link  as={Link} to="/Showusers">ShowUsers </Nav.Link>
            <Nav.Link  as={Link} to="/login">Login</Nav.Link>
            <Nav.Link  as={Link} to="/contact">ContactUs</Nav.Link>
  
          </Nav>
     
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;