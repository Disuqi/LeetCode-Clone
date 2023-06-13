import React from "react";

type SingUpProps = {};

export default function SignUpModal({}: SingUpProps) 
{
    return (<>
		<form className='space-y-6 px-6 pb-4'>
			<div className="flex justify-center items-center w-full">
				<h3 className='text-2xl font-black text-indigo-500'>LOGO</h3>
			</div>
            <div>
				<label htmlFor='username' className='font-medium block mb-2 text-black'>Username</label>
				<input type='username' name='username' id='username' placeholder='username'
						className='p-2.5 rounded-lg outline-none border border-gray-300 focus:ring-blue-500 focus:border-blue-500'/>
			</div>
			<div>
				<label htmlFor='email' className='font-medium block mb-2 text-black'>Your Email</label>
				<input type='email' name='email' id='email' placeholder='name@company.com'
						className='p-2.5 rounded-lg outline-none border border-gray-300 focus:ring-blue-500 focus:border-blue-500'/>
			</div>
			<div>
				<label htmlFor='password' className='font-medium block mb-2 text-black'>Your Password</label>
				<input type='password' name='password' id='password' placeholder="password"
				className='p-2.5 rounded-lg outline-none border border-gray-300 focus:ring-blue-500 focus:border-blue-500'/>
                                <div className="mt-1">
                    <input type='password' name='password' id='confirmPassword' placeholder="confirm password"
				        className='p-2.5 rounded-lg outline-none border border-gray-300 focus:ring-blue-500 focus:border-blue-500'/>
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
				<a href='#' className='text-indigo-500 hover:underline outline-none focus:text-blue-500 focus:underline'>
					Sign In
				</a>
			</div>
		</form>
    </>);
}
