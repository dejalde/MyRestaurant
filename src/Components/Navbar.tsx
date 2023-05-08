import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import CreateButton from './CreateButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


function Navigationbar() {
  const navigate= useNavigate();
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Fusion Delight</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="Home">Home</Nav.Link>
            <Nav.Link href="AboutUs">About Us</Nav.Link>
            <Nav.Link href="ContactUs">Contact Us</Nav.Link>
            
            
          </Nav>
          <Nav>
            <CreateButton />
            <Button variant="dark" onClick={()=>navigate('/')}>LOGOUT</Button>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Navigationbar;