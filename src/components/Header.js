

import React from 'react';
import './header.css';

const UserList = (props) => {

    return (
        <div className='header-main'>
        <ul>
            <li>Name</li>
            <li>Status</li>
            <li>Access</li>
            
        </ul>
        </div>
    );
};
export default React.memo(UserList);