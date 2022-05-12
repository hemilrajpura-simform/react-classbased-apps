import React from 'react'
import './UserList.css';
import { RefreshCw } from 'react-feather';
const PageNotFound = (props) => {
    const reloadHandler=()=>{
        props.paginationHandler("reload");
    };
    return (
        <div className='PageNotFound'>
            <img
            alt=''
             src="https://www.kindpng.com/picc/m/164-1647170_404-page-04-404-error-page-png-transparent.png" />
            <h1>Page Not Found!</h1>
            <button id='notFound' onClick={reloadHandler}>Reload <RefreshCw className='RefreshCw' /> </button>
        </div>
    )
}

export default PageNotFound