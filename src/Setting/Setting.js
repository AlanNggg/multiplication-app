import React, { Component } from 'react';
import SettingDetail from '../SettingDetail/SettingDetail';

import './Setting.css';

class Setting extends Component {
    render() {
        const { classList, gameList } = this.props;
        return (
            <div className='Setting'>
                <SettingDetail classList={classList} gameList={gameList} />
            </div>
        );
    }
}

export default Setting;