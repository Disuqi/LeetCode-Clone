import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main>
        <div className='felx justify-center items-center w-full h-full'>
          <a href='/auth' className='font-bold p-5 border border-black rounded-full hover:border-white hover:bg-black hover:text-white transition duration-300 ease-in '>AUTH PAGE</a>
        </div>
      </main>
    </> 
  )
}
