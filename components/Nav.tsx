"use client";

import Link from 'next/link';
import React, {useState} from 'react';
import Image from 'next/image';
import {signOut} from "@node_modules/next-auth/react";

export const Nav = () => {
    const isUserLoggedIn = true;

    const [providers, setProviders] = useState(null);

    return (
        <nav className="flex-between w-full mb-16">
            <Link href='/' className="flex gab-2 flex-center" >
                <Image src="/assets/images/logo.svg" alt="Promptopia logo" width={30} height={30} className="object-contain" />
                <p className="logo_text">Promptopia</p>
            </Link>

            {/*Mobile Navigation*/}
            <div className="sm:flex hidden">
                {isUserLoggedIn ? (
                    <div className="flex gap-3 md:gap-5">
                        <Link href="/create-prompt"
                        className="black_btn">
                            Create Post
                        </Link>

                        <button
                            type="button"
                            onClick={signOut}
                            className="outline_btn">
                            Sign Out
                        </button>
                        
                        <Link href="/profile">
                            <Image
                                src="/assets/images/logo.svg"
                                alt="profile"
                                width={37}
                                height={37}
                                className=""/>
                        </Link>
                    </div>
                ): (
                    <>

                    </>
                )}
            </div>
        </nav>
    )
}