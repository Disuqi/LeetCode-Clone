import React, { use, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import SignInModal from "./SignIn";
import SignUpModal from "./SignUp";
import ResetPassModal from "./ResetPassword";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";
import { AuthModalType } from "@/atoms/authModalAtom";

type AuthModalProps = {};

export default function AuthModal({}: AuthModalProps) 
{
    const openCloseModal = UpdateAuthModal();
    const authModalSt = useRecoilValue(authModalState);

    return (		
    <>
        <div className="absolute flex justify-center items-center w-screen h-screen">            
            <div className="z-20 p-10 rounded-lg bg-white flex justify-center items-center">
                {authModalSt.type == AuthModalType.SignIn ? <SignInModal /> : authModalSt.type == AuthModalType.SignUp ? <SignUpModal /> : <ResetPassModal />}
            </div>
            <button className="absolute z-10 flex justify-center items-center w-screen h-screen bg-black opacity-50"
            onClick={openCloseModal}></button>            
        </div>
    </>);
}

export function UpdateAuthModal(type?: AuthModalType)
{
    const setAuthModal = useSetRecoilState(authModalState);
    const openCloseModal = () => {
        if(type != null)
            setAuthModal((oldState) => ({...oldState, type: type}));
        else
            setAuthModal((oldState) => ({type: AuthModalType.SignIn, isOpen: !oldState.isOpen}));
    }

    return openCloseModal;
}