'use client'
import React from 'react';
import {useRouter} from "next/navigation";

const GoProducts = () => {
    const router = useRouter();
    const handleClick = ()=>{
        router.push('/products');
    }
    return (
        <button onClick={handleClick}>
            Go Back Products
        </button>
    );
};

export default GoProducts;