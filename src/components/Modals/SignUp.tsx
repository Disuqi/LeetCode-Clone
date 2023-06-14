import { AuthModalType, authModalState } from "@/atoms/authModalAtom";
import React, { use } from "react";
import { useSetRecoilState } from "recoil";
import { UpdateAuthModal } from "./AuthModal";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/router";

type SingUpProps = {};

enum FieldType
{
	Username,
	Email,
	Password,
}

export default function SignUpModal({}: SingUpProps) 
{
	const toSignIn = UpdateAuthModal(AuthModalType.SignIn);

	const [userInfo, setUserInfo] = React.useState({username: '', email:'', password:''});
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, type: FieldType) => 
	{
		switch(type){
			case FieldType.Username:
				setUserInfo({...userInfo, username: e.target.value});
				break;
			case FieldType.Email:
				setUserInfo({...userInfo, email: e.target.value});
				break;
			case FieldType.Password:
				setUserInfo({...userInfo, password: e.target.value});
				break;
		}
	}
	const router = useRouter();
	const [createUser, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
	const registerUser = async (e: React.FormEvent<HTMLFormElement>) =>
	{
		e.preventDefault();
		try
		{
			const user = await createUser(userInfo.email, userInfo.password);
			if(!user) return;
			router.push('/');
		} 
		catch(error:any)
		{
			console.log(error.message);
		}
		
	}

    return (<>
		<form className='space-y-6 px-6 pb-4' onSubmit={registerUser}>
			<div className="flex justify-center items-center w-full">
				<h3 className='text-2xl font-black text-indigo-500'>LOGO</h3>
			</div>
            <div>
				<label htmlFor='username' className='font-medium block mb-2 text-black'>Username</label>
				<input type='username' name='username' id='username' placeholder='username'
						className='p-2.5 rounded-lg outline-none border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
						onChange={(e) => handleInputChange(e, FieldType.Username)}/>
			</div>
			<div>
				<label htmlFor='email' className='font-medium block mb-2 text-black'>Your Email</label>
				<input type='email' name='email' id='email' placeholder='name@company.com'
						className='p-2.5 rounded-lg outline-none border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
						onChange={(e) => handleInputChange(e, FieldType.Email)}/>
			</div>
			<div>
				<label htmlFor='password' className='font-medium block mb-2 text-black'>Your Password</label>
				<input type='password' name='password' id='password' placeholder="password"
				className='p-2.5 rounded-lg outline-none border border-gray-300 focus:ring-blue-500 focus:border-blue-500'/>
                                <div className="mt-1">
                    <input type='password' name='password' id='confirmPassword' placeholder="confirm password"
				        className='p-2.5 rounded-lg outline-none border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
						onChange={(e) => handleInputChange(e, FieldType.Password)}/>
                </div>
			</div>
			<button type='submit' 
					className='w-full text-white font-medium rounded-lg
							text-sm px-5 py-2.5 text-center bg-indigo-500 outline-none border-2 border-transparent focus:ring-blue-500 focus:bg-indigo-800
							hover:border-indigo-500 hover:bg-white hover:text-indigo-500 transition duration-200'>
				Sign Up
			</button>
			<div className='text-sm font-medium text-black text-right'>
				Already Registered?{" "}
				<button className='text-indigo-500 hover:underline outline-none focus:text-blue-500 focus:underline'
					onClick={toSignIn}>
					Sign In
				</button>
			</div>
		</form>
    </>);
}
