import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import Detail from '../Detail/Detail';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css';

class Profile extends Component {

    render() {
        const { profile } = this.props;
        const navBrand = profile ? `${profile.studClass} - ${profile.name}'s Profile` : 'Profile';
        return (
            <div className='Profile'>
                <Navbar bg='primary' variant='dark' style={{ borderRadius: '10px 10px 0 0' }}>
                    <Navbar.Brand>{navBrand}</Navbar.Brand>
                </Navbar>
                <Detail profile={profile} />
            </div>
        )
    }
}

export default Profile;