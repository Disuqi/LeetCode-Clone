import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main>
        <div className='flex justify-center items-center w-screen h-full'>
          <div className='font-bold m-2 p-3 border border-black rounded-full hover:bg-black hover:text-white transition duration-300 ease-in '>
            <a href='/auth'>AUTH PAGE</a>
          </div>
        </div>
      </main>
    </> 
  )
}
