import Link from 'next/link'
import React from 'react'



const HeaderTop = () => {
  return (
    <header className='flex justify-center bg-black text-white h-9 '>

<p>Sign up and get 20% off to your first order 
  
  <Link href="/Signup" className='hover:border-b-2'> Sign up Now  </Link>
  
    </p>


    </header>
  )
}

export default HeaderTop