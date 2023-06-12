import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import AuthModal from "@/Modals/AuthModal";
import SignInModal from "@/Modals/SignIn";
import SignUpModal from "@/Modals/SignUp";

type AuthProps = {};

export default function AuthPage({}: AuthProps) {
  return (
		<div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
			<div className='max-w-7xl mx-auto'>
				<Navbar />
				<div className='flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none'>
					<h1>LOGO</h1>
				</div>
        <AuthModal />
			</div>
		</div>
  );
}