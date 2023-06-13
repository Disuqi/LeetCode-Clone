import React from "react";

type ResetPassProps = {};

export default function ResetPassModal({}: ResetPassProps) 
{
    return (
		<form className='space-y-6 px-6 pb-4 max-w-md'>
			<div className="flex justify-center items-center w-full">
				<h3 className='text-2xl font-black text-indigo-500'>LOGO</h3>
			</div>
			<div>
                <p>Please provide your email address in the designated field, and a password reset email will be sent to you.</p>
				<input type='email' name='email' id='email' placeholder='name@company.com'
						className='p-2.5 rounded-lg outline-none border border-gray-300 focus:ring-blue-500 focus:border-blue-500'/>
			</div>
			<button type='submit' 
					className='w-full text-white font-medium rounded-lg
							text-sm px-5 py-2.5 text-center bg-indigo-500 outline-none border-2 border-transparent focus:ring-blue-500 focus:bg-indigo-800
							hover:border-indigo-500 hover:bg-white hover:text-indigo-500 transition duration-200'>
				Send
			</button>
		</form>
    );
}
