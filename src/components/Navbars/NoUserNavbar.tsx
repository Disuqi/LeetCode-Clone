import React from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";

type NabvarProps = {};

export default function Navbar({}: NabvarProps) 
{
    const setAuthModalState = useSetRecoilState(authModalState); 
    const handleClick = () => {
        setAuthModalState((oldState) => ({...oldState, isOpen: true}));
    }
    return (
        <div className="absolute bg-gray-900  text-white flex items-center justify-around sm:px-12 px-2 md:px-24 h-20 w-screen">
            <a href="/" className="font-bold text-indigo-500">LOGO</a>
            <div className="flex items-center justify-center">
                <button className="bg-indigo-500 px-3 py-2 m-2 rounded-full text-[0.6rem]
                hover:text-indigo-200 hover:bg-indigo-800 transition duration-300 ease-in-out"
                onClick={handleClick}>Sign in</button>
            </div>
        </div>
    );
}
