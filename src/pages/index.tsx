import React, { useEffect } from 'react';
import Navbar from '@/components/Navbars/Navbar';




export default function Home() {
  return (
    <>
      <main className='bg-gray-900'>
        <Navbar />
        <div className='pt-20'>
          <h1 className='text-2xl text-center text-indigo-400 font-medium italic uppercase mt-10 mb-5'>
            Coding Challenges
          </h1>
          <div className='relative overflow-x-auto mx-auto px-6 pb-10'>
          <table className='text-sm text-left sm:w-7/12 w-full max-w-[1200px] mx-auto'>
            <thead className='text-xs uppercase text-indigo-400 border-b '>
              <tr>
                <th scope='col' className='px-1 py-3 w-0 font-medium'>
                  Status
                </th>
                <th scope='col' className='px-6 py-3 w-0 font-medium'>
                  Title
                </th>
                <th scope='col' className='px-6 py-3 w-0 font-medium'>
                  Difficulty
                </th>

                <th scope='col' className='px-6 py-3 w-0 font-medium'>
                  Category
                </th>
                <th scope='col' className='px-6 py-3 w-0 font-medium'>
                  Solution
                </th>
              </tr>
            </thead>
          </table>
          </div>
        </div>
      </main>
    </> 
  )
}