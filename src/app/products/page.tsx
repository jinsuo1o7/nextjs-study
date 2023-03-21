import React from 'react';
import Link from "next/link";
import {getProducts} from "@/service/products";
import MeowInfo from "@/components/MeowInfo";
import clothesImage from '../../../public/images/img.jpg';
import Image from "next/image";
const Page = async () => {
    const products = await getProducts();

    return (
        <>
            <h1>Products Main</h1>
            {/*<Image src={clothesImage} alt='clothes'/>*/}
            <ul>
                {products.map(({id, name}, index) => (
                    <li key={index}>
                        <Link href={`/products/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
            <MeowInfo/>
        </>
    );
};
export default Page;