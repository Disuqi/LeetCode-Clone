import React from "react";
import DefaultButton from "../Buttons/DefaultButton";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";
import AuthModal from "../Modals/AuthModal";
import { onlineUserManager } from "@/firebase/firebase";
import { IsSignedIn } from "@/atoms/SigningAtom";

export default function Navbar() 
{
    const authModalSt = useRecoilValue(authModalState);
    const setAuthModal = useSetRecoilState(authModalState);
    const userIsSignedIn = useRecoilValue(IsSignedIn);
    const setIsSignedIn = useSetRecoilState(IsSignedIn);

    return (
        <> 
        <div className="absolute bg-gray-950  text-white flex items-center justify-around sm:px-12 px-2 md:px-24 h-20 w-screen">
            <a href="/" className="font-bold text-indigo-500">LOGO</a>
            <div className="flex items-center justify-center">
            {userIsSignedIn ? (
                <DefaultButton onClick={async () => {
                    await onlineUserManager.SignOut();
                    setIsSignedIn(false);
                    alert("Signed Out");
                }} text={"Sign Out"} />
            ):(
                <DefaultButton onClick={() => {
                    setAuthModal((prev) => ({...prev, isOpen: true}));
                }} text={"Sign In"} />
            )}
            </div>
        </div>
         {authModalSt.isOpen && <AuthModal/>}
        </>
    );
}
