import React from 'react';
import {getProduct, getProducts} from "@/service/products";
import {redirect} from "next/navigation";
import Image from "next/image";
import GoProducts from "@/app/products/[slug]/GoProducts";

type Props = { params: { slug: string; } }
const Page = async({params: {slug}}: Props) => {
    const product = await getProduct(slug);

    if(!product){
        redirect('/products');
    }
    return (
        <>
            <h1>Version 1</h1>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <Image src={`/images/${product.image}`} alt={product.name} width={400} height={400}/>
            <GoProducts/>
        </>
    );
};

export const generateStaticParams = async() => {
    const products = await getProducts();
    return products.map(product => ({
        slug: product.id,
    }));
};

export default Page;