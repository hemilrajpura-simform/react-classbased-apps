import React from 'react'
import './UserList.css';
import { Loader } from 'react-feather';


const Loading = (props) => {
  
    return (
        <div className='PageNotFound' id="Loading">
            <h1>Loading <Loader className='RefreshCw' /> </h1>
        </div>
    )
}
export default Loading;