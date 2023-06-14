import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import AuthModal from "@/components/Modals/AuthModal";
import SignInModal from "@/components/Modals/SignIn";
import SignUpModal from "@/components/Modals/SignUp";
import { useRecoilValue } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";

type AuthProps = {};

export default function AuthPage({}: AuthProps) {
  const authModal = useRecoilValue(authModalState);
  return (
  <>
    <main>
        <Navbar />
        {authModal.isOpen? <AuthModal /> : null}
  </main>
  </>
  );
}