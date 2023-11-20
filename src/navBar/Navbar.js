import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import "./Navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ThemeContextProvider from '../context/themeContext';
import BtnToggler from '../componet/btnToggler/btnToggler/btnToggler';






export default function Navbar1() {

 return (

    <Navbar expand="lg" className='bg-dark btn-light ' >
  
      <Container>
     
     <Navbar.Toggle aria-controls="basic-navbar-nav" style={{position:"relative",left:"400px"}} />
     <Navbar.Collapse id="basic-navbar-nav"  >
       <Nav className="me-10" >
         <Nav.Link href="/"><p style={{color:"lightblue"}}>calcul</p></Nav.Link>
         <Nav.Link href="/tp2"><p style={{color:"lightblue",marginLeft:"40px"}}>slider</p></Nav.Link>
         <Nav.Link href="/tp3"><p style={{color:"lightblue",marginLeft:"40px"}}>todolis</p></Nav.Link>
         <Nav.Link href="/tp4"><p style={{color:"lightblue",marginLeft:"40px"}}>pagination</p></Nav.Link>
         <Nav.Link href="/tp5"><p style={{color:"lightblue",marginLeft:"40px"}}>multilang</p></Nav.Link>

       </Nav>
     </Navbar.Collapse>
     <ThemeContextProvider>
          <BtnToggler/>
        </ThemeContextProvider>

   </Container>
     

  </Navbar>
 )
}