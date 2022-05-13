import React from 'react'
import './UserList.css';
import { Loader } from 'react-feather';

class Loading extends React.Component {
    constructor(props:any) {
        super(props);
    }
    render() {
        return (
        <div className='PageNotFound' id="Loading">
            <h1>Loading <Loader className='RefreshCw' /> </h1>
        </div>
    )
}
}
export default Loading;