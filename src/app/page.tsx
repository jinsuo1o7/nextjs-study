import Image from 'next/image'
import styles from './page.module.css'
import {Metadata} from "next";
import Counter from "@/components/Counter";


export default function Home() {
    return (
        <div>Main Page
            <Image src={'https://images.unsplash.com/photo-1441986300917-64674bd600d8'} alt='shop' width={400} height={400}/>
            <Counter/>
        </div>
    );
}
