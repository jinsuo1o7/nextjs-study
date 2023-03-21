import './globals.css';
import styles from './layout.module.css';
import Link from "next/link";
import {Metadata} from "next";
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})
export const metadata: Metadata = {
    title: 'Study Next Js',
    description: 'Study next js and pratice',
    icons: {
        icon: '/favicon.ico',
    },
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" className={inter.className}>
        <body>
        <header className={styles.header}>
            <h1>Demo note</h1>
            <nav className={styles.nav}>
                <Link href={"/products"}>Products</Link>
                <Link href={"/contact"}>Contact</Link>
                <Link href={"/about"}>About</Link>
            </nav>
        </header>
        {children}
        </body>
        </html>
    )
}
