import React from 'react';
import './header.css';

class UserList extends React.Component {

    render() {
        return (
            <div className='header-main'>
                <ul>
                    <li>Name</li>
                    <li>Status</li>
                    <li>Access</li>

                </ul>
            </div>
        )
    }
};
export default React.memo(UserList);