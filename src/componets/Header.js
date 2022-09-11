import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from 'react-router-dom';
function Header() {
    return (
        <>
            <header>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Link to="/" className='text-decoration-none fs-5 py-3'>Dynamic API</Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <NavLink
                                    to="/"
                                    className={(navInfo) =>
                                        navInfo.isActive ? "fw-bold text-decoration-none ms-3 text-danger" : "fw-bold text-decoration-none ms-3"
                                    }
                                >Home</NavLink>
                                <NavLink
                                    to="/news"
                                    className={(navInfo) =>
                                        navInfo.isActive ? "fw-bold text-decoration-none ms-3 text-danger" : "fw-bold text-decoration-none ms-3"
                                    }
                                >News</NavLink>
                                <NavLink
                                    to="/meal"
                                    className={(navInfo) =>
                                        navInfo.isActive ? "fw-bold text-decoration-none ms-3 text-danger" : "fw-bold text-decoration-none ms-3"
                                    }
                                >Meals</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}

export default Header