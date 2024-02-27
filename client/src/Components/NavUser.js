import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { current, logout } from '../Redux/Actions/AuthActions';
import { useEffect } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavUser=()=>{
    
    const dispatch = useDispatch()
    // useEffect(()=>{
    //     dispatch(current())
    // })
    const token = localStorage.getItem('token')
    const user = useSelector(state=> state.AuthReducer.user)

    const navigate = useNavigate()
    return(
        <Navbar bg="light" data-bs-theme="light">
            {/* style={{position:'fixed',top:'0', left:'0', width:'100%', zIndex:'10'}}  */}
            <Container fluid>
            <Navbar.Brand href="#home">C&H SHOP</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/ListProduct">List Product</Nav.Link>
                    <NavDropdown id="nav-dropdown-dark-example" title="Vêtement" menuVariant="dark">
                        <NavDropdown.Item as={Link} to="/ListProductChemise">Chemises</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/ListProductPantalon">Pantalons</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/ListProductChaussure">Chaussures</NavDropdown.Item>
                </NavDropdown>


                {
                    token && user?
                    <>                    
                        <Nav.Link as={Link} to="/Profil">Profil</Nav.Link>

                        {
                            user.role == 'admin' &&
                            <>
                                <Nav.Link as={Link} to="/ListUser">List User</Nav.Link>
                                <Nav.Link as={Link} to="/AddProduct">Add Product</Nav.Link>
                                <Nav.Link as={Link} to="/ListCommande">List Commande</Nav.Link>
                                
                            </>
                        }
                        
                        <Nav.Link as={Link} to="/Panier">Panier</Nav.Link>
                        <Nav.Link onClick={()=>{dispatch(logout()); navigate('/')}}>Logout</Nav.Link>
                        <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
                    </>
                    :
                    <>
                        <Nav.Link as={Link} to="/Register">Register</Nav.Link>
                        <Nav.Link as={Link} to="/Login">Login</Nav.Link>

                        
                    </>


                }
                
                {/* <Nav.Link as={Link} to="/Panier">Panier</Nav.Link> */}

                </Nav>
            </Container>
        </Navbar>
    )
}
export default NavUser