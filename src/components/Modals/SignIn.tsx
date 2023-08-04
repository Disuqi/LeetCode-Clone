import { AuthModalType, authModalState } from "@/atoms/authModalAtom";
import React from "react";
import { FieldType, UpdateAuthModal } from "./AuthModal";
import { onlineUserManager } from "@/firebase/firebase";
import { useSetRecoilState } from "recoil";
import { IsSignedIn } from "@/atoms/SigningAtom";
import { AuthStatus } from "@/firebase/firebase";
import { AiFillRead } from "react-icons/ai";

type SigninModalProps = {};

export default function SignInModal({}: SigninModalProps) 
{
	const toPassword = UpdateAuthModal(AuthModalType.ResetPassword);
	const toSignUp = UpdateAuthModal(AuthModalType.SignUp);
	const setIsSignedIn = useSetRecoilState(IsSignedIn);
	const setAuthModal = useSetRecoilState(authModalState);

	const [userData, setUserData] = React.useState({email: '', password: ''});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, type: FieldType) =>
	{
		switch(type){
			case FieldType.Email:
				setUserData({...userData, email: e.target.value});
				break;
			case FieldType.Password:
				setUserData({...userData, password: e.target.value});
				break;
		}
	};
	const signIn = async (e : React.FormEvent<HTMLFormElement>) => 
	{
		e.preventDefault();
		var result = await onlineUserManager.SignIn(userData.email, userData.password);
		if(result.Status == 0)
		{
			setIsSignedIn(true);
			setAuthModal({isOpen: false, type: AuthModalType.SignIn});
			alert("Sign in successfully!");
		}else
		{
			switch(result.Status)
			{
				case AuthStatus.InvalidEmail:
				case AuthStatus.WrongPassword:
					alert("Invalid email or password!");
					break;
				case AuthStatus.UserNotFound:
					setAuthModal((prev) => ({...prev, type: AuthModalType.SignUp}));
					alert("User not found! Please sign up!");
					break;
				case AuthStatus.UserDisabled:
					alert("User is disabled!");
					break;
				case AuthStatus.UnknownError:
					alert("Unknown error!");
					break;
			}
		}
	};
    return (
		<form className='space-y-6 px-6 pb-4' onSubmit={signIn}>
			<div className="flex justify-center items-center w-full">
				<h3 className='text-2xl font-black text-indigo-500'>LOGO</h3>
			</div>
			<div>
				<label htmlFor='email' className='font-medium block mb-2 text-black'>Your Email</label>
				<input type='email' name='email' id='email' placeholder='name@company.com'
						className='p-2.5 rounded-lg outline-none border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
						onChange={(e) => {handleInputChange(e, FieldType.Email)}}/>
			</div>
			<div>
				<label htmlFor='password' className='font-medium block mb-2 text-black'>Your Password</label>
				<input type='password' name='password' id='password' placeholder="password"
				className='p-2.5 rounded-lg outline-none border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
				onChange={(e) => {handleInputChange(e, FieldType.Password)}}/>
			</div>
			<button type='submit' 
					className='w-full text-white font-medium rounded-lg
							text-sm px-5 py-2.5 text-center bg-indigo-500 outline-none border-2 border-transparent focus:ring-blue-500 focus:bg-indigo-800
							hover:border-indigo-500 hover:bg-white hover:text-indigo-500 transition duration-200'>
				Sign in
			</button>
			<button className='w-full text-gray-400 text-sm outline-none focus:text-blue-500 hover:underline text-right focus:underline'
			onClick={toPassword}>
					Forgot Password?
			</button>
			<div className='text-sm font-medium text-black text-right'>
				Not Registered?{" "}
				<button className='text-indigo-500 hover:underline outline-none focus:text-blue-500 focus:underline'
					onClick={toSignUp}>
					Create account
				</button>
			</div>
		</form>
    );
}
