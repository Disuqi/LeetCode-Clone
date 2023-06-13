import React from "react";
import { IoClose } from "react-icons/io5";
import SignUpModal from "./SignUp";
import ResetPassModal from "./ResetPassword";

type AuthModalProps = {};

export default function AuthModal({}: AuthModalProps) 
{
    return (		
    <>
        <button className="absolute flex justify-center items-center w-screen h-screen bg-black opacity-50"></button>
        <div className="absolute flex justify-center items-center w-full h-full">
            <div className="p-10 rounded-lg bg-white flex justify-center items-center">
            </div>
        </div>
    </>);
}
