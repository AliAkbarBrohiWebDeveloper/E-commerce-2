import React from 'react'
import { BiSearch,BiCart,BiUser } from 'react-icons/bi'


const HeaderMain = () => {
  return (
    <header className='justify-evenly  items-center mt-6  hidden sm:block '>

<div>

    <h1 className='font-bold text-3xl'>Shop.Com</h1>
</div>
<nav>

    <ul className='flex justify-between gap-7 '>

        <li className='mx-2 hover:border-b-4'>Shop</li>
        <li className='hover:border-b-4'>on Sale</li>
        <li className='hover:border-b-4'> New Arrivals</li>
        <li className='hover:border-b-4'> Brands</li>
        <li>
            

            <input  type="text" placeholder='Search For Products'  className='text-1xl border-4 rounded-lg cursor-pointer' / >
        </li>
        <li>
        <BiCart className=' text-2xl'/>
        </li>
        <li>

<BiUser className='text-2xl'/>
        </li>
    </ul>
</nav>

    </header>
  )
}

export default HeaderMain