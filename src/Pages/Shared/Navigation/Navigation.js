import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import logo from '../../../Images/logo-white.png';
const Navigation = () => {
    const { user, logOut, admin } = useFirebase()
    console.log(admin);
    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image src={logo}></Image>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/course">Courses</Nav.Link>
                            <Nav.Link as={Link} to="/aboutUs">About us</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/contactUs">Contact us</Nav.Link>
                            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                        </Nav>
                        <Navbar.Text>
                            <i className="fab fa-facebook-f text-danger fs-5 me-3 social-icon"></i>
                        </Navbar.Text>
                        <Navbar.Text>
                            <i className="fab fa-google-plus-g text-danger fs-5 me-3 social-icon"></i>
                        </Navbar.Text>
                        <Navbar.Text>
                            <i className="fab fa-linkedin-in text-danger fs-5 me-3 social-icon"></i>
                        </Navbar.Text>
                        <Navbar.Text>

                        </Navbar.Text>
                        <Navbar.Text>
                            {
                                user?.email ? <img className='me-2' style={{ height: '50px', width: '50px', borderRadius: '50%' }} src={user?.photoURL} alt="" /> : ''
                            }
                            {!user?.email ? <Link to='/login' className="btn btn-success">Login</Link> : <button onClick={logOut} className="btn btn-danger">Log Out</button>
                            }

                        </Navbar.Text>

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div >
    );
};

export default Navigation;