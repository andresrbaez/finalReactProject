import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProductsThunk } from '../store/slices/products.slice';

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsThunk())


    }, []);


    return (
        <div>
            <h1>Home</h1>
            
        </div>
    );
};

export default Home;