import React from 'react';
import { Spinner } from 'react-bootstrap';
import '../styles/loadingScreen.css';

const LoadingScreen = () => {
    return (
        <div className='overlay'>
            <Spinner animation="grow" variant="dark"/>
            Loading...
            
        </div>
    );
};

export default LoadingScreen;