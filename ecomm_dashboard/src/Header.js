import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';

function Header (){
    let user = JSON.parse(localStorage.getItem('user-info'))
    //console.warn("THE USER US : " + user)

    const navigate = useNavigate()

    function logOut()
    {
        localStorage.clear();
        navigate("/")
    }
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">E-comm</Navbar.Brand>
                <Nav className="me-auto navbar_wrapper">
                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <Link to="/" >Product List</Link>
                                <Link to="/add" >Add Product</Link>
                                <Link to="/search" >Search Product</Link>
                            </>
                            :
                            <>
                            <Link to="/login" >Login</Link>
                            <Link to="/register" >Register</Link>
                            </>
                    }
                </Nav>
                {localStorage.getItem('user-info') ?
                <Nav>
                    <NavDropdown title={user && user.name}>
                        <NavDropdown.Item >Profile</NavDropdown.Item>
                        <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                :null}
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;