import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import './MulNavbar.css';

class MulNavbar extends Component {
    render() {
        // role: 1 = student, 2: parent, 3: teacher
        const { role } = this.props;
        return (
            <header>
                <Navbar bg='primary' variant='dark'>
                    <Navbar.Brand>Multiplication Table System</Navbar.Brand>
                    <Nav className="mr-auto">
                        {/* <NavLink exact className='nav-link' activeClassName='active-link' to='/main'>Logout</NavLink> */}
                        <NavLink exact className='nav-link' activeClassName='active-link' to='/'><i className="fas fa-calculator"></i> Game</NavLink>
                        <NavLink exact className='nav-link' activeClassName='active-link' to='/table'><i className="fas fa-table"></i> Table</NavLink>
                        {
                            role === 3 ?
                                <React.Fragment>
                                    <NavLink className='nav-link' activeClassName='active-link' to='/statistic'><i className="fas fa-database"></i> Statistic</NavLink>
                                    <NavLink exact className='nav-link' activeClassName='active-link' to='/setting'><i className="fas fa-sliders-h"></i> Setting</NavLink>
                                </React.Fragment> :
                                <NavLink className='nav-link' activeClassName='active-link' to='/statistic_parent'><i className="fas fa-database"></i> Statistic</NavLink>
                        }

                    </Nav>
                </Navbar>
            </header>
        );
    }
}

export default MulNavbar;