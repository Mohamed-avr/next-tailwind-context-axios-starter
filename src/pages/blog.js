import { useContext } from 'react'
import AppContext from '../../components/appContext'
import Link from 'next/link';



export default function blog() {
    const {data} = useContext(AppContext);
 

  return ( <>  
   <main className="flex justify-center items-center mt-32 flex-col ">
         <h3 className='text-3xl'>  author:  {data[0]['author']} </h3>
        <div className='flex justify-center space-x-2 items-center mt-10'>
           Blog posts : {data[0].posts} 
        </div>
        <Link className='mt-[20rem] text-blue-500' href='/'>home </Link>
      </main>
   </>
  )
}

