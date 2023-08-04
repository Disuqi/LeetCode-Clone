import React from 'react';

type ButtonProps = {
    onClick: () => void;
    text: string;
}

export default function DefaultButton(props: ButtonProps)
{
    return (<>
                <button className="bg-indigo-700 px-3 py-2 m-2 rounded-full text-[0.6rem]
                        hover:text-indigo-200 hover:bg-indigo-950 transition duration-300 ease-in-out"
                        onClick={props.onClick}>{props.text}</button>
            </>);
}