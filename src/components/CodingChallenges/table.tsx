import React from "react";
import { challenges } from '@/components/CodingChallenges/challenges'
import { AiFillYoutube } from 'react-icons/ai';
import { BsCheckCircle } from 'react-icons/bs';
import Link from 'next/link';
import Youtube from 'react-youtube';

type TableProps = {};

export default function ChallengesTable({}: TableProps) 
{
    const [youtubePlayer, setYoutubePlayer] = React.useState({
        isOpen: false,
        videoId: ""
    });

    const dataClass : string = "px-6 py-3";
    return (
    <>
    <tbody className="text-gray-200">
        {challenges.map((doc, idx) => 
        {
            var difficultyColor : string = "text-green-500";
            switch(doc.difficulty)
            {
                case "Medium":
                    difficultyColor = "text-yellow-500";
                    break;
                case "Hard":
                    difficultyColor = "text-red-500";
                    break;
            }
            return (<tr key={doc.id}>
                <th className="px-1 py-3 w-0 text-green-500 text-xl">
                    <BsCheckCircle/>
                </th>
                <Link href={"/challenges/" + doc.id} className="hover:text-indigo-500 cursor-pointer transition duration-100 ease-in-out">
                    <td className={dataClass}>{doc.title}</td>
                </Link>
                
                <td className={dataClass}>{doc.category}</td>
                <td className={dataClass + " " + difficultyColor}>{doc.difficulty}</td>
                <td className={dataClass}>{doc.videoId? (<AiFillYoutube className="text-2xl cursor-pointer hover:text-red-500" 
                onClick={() => setYoutubePlayer({isOpen: true, videoId: doc.videoId as string})} />) : (<p>Coming Soon</p>)}</td>
            </tr>)
        })}
    </tbody>
    {youtubePlayer.isOpen && (    
    <tfoot className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center">
        <button className="bg-black z-3 opacity-70 top-0 left-0 w-screen h-screen absolute" onClick={() => setYoutubePlayer({isOpen: false, videoId: ""})}></button>
        <div className="z-4 w-full h-full px-6 relative max-w-4xl">
            <div className="w-full h-full relative">
                <Youtube videoId={youtubePlayer.videoId} loading='lazy' iframeClassName="w-full min-h-[500px]" />
            </div>
        </div>
    </tfoot>
    )}
    </>)
}