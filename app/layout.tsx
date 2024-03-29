import React from "react";
import {Nav} from "@components/Nav";

import '../styles/globals.css';


export const metadata = {
    title: 'Promptopia',
    description: 'Discover & Share AI Prompts'
}

const RootLayout = ({
    children,
                    }: {
    children: React.ReactNode
}) => {
    return (
        <html lang='en'>
        <body>
        <div className="main">
            <div className="gradient"/>
        </div>

        <main className="app">
            <Nav/>
            {children}
        </main>
        </body>
        </html>
    )
}

export default RootLayout