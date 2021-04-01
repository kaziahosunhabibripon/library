import React from 'react';
import { useParams } from 'react-router';

const CheckOut = () => {
    const {id} = useParams();
    console.log(id);
    // const orderBooks = books.find(vc=>vc._id === _id);
    return (
        <div>
            <h1>this</h1>
        </div>
    );
};

export default CheckOut;