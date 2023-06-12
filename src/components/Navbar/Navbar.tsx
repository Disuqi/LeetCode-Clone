import React from "react";

type NabvarProps = {};

export default function Navbar({}: NabvarProps) 
{
    return (
        <div className=" flex items-center justify-around sm:px-12 px-2 md:px-24 h-28">
            <a href="/" className="font-bold">LOGO</a>
            <div className="flex items-center justify-center">
                <button className="bg-gradient-to-r from-indigo-600 to-pink-500 w-20 h-10  m-2 rounded-full text-sm font-medium
                hover:border-white transition duration-300 ease-in-out">Sign in</button>
            </div>
        </div>
    );
}
