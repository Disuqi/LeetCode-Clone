import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import AuthModal from "@/components/Modals/AuthModal";
import SignInModal from "@/components/Modals/SignIn";
import SignUpModal from "@/components/Modals/SignUp";

type AuthProps = {};

export default function AuthPage({}: AuthProps) {
  return (
  <>
    <main>
        <Navbar />
        <AuthModal/>
  </main>
  </>
  );
}