import Link from 'next/link'
import React from 'react'
import { BsLinkedin ,BsFacebook,BsInstagram,BsGithub} from 'react-icons/bs'


const Footer = () => {
  return (
    < >
    <footer className='flex justify-center bg-slate-100 mx-1 items-center '>
      <div className='flex justify-center mt-6   items-center'>
      

<ul  className='mr-[100px] '>
  <li className='font-bold text-xl'>SHOP.CO.</li>
  <li className='mt-3'> We have Clothes that suits your style and which you are proud to wear from women to men.  </li>
</ul>
 

<ul className='mr-[100px]'>
  <li className='font-bold'>Company</li>
  <li className='mt-3'>About</li>
  <li>Features</li>
  <li>Works</li>
  <li>Career</li>
</ul>
<ul className='mr-[100px]'>
  <li className='font-bold'>

Help

  </li>
  <li className='mt-3'>Customer Support</li>
  <li>Delivery details</li>
  <li>Terms&Conditions</li>
  <li>Privacy Policy</li>
</ul>
<ul className='mr-[100px]'>
  <li className='font-bold'>FAQ</li>
  <li className='mt-3'>Account</li>
  <li>Manage Deliveries</li>
  <li>Orders</li>
  <li>Payments</li>
</ul>
<ul className='mr-[100px] '>
  <li className='font-bold'>
    Resources
  </li>
  <li className='mt-3'>Free Books</li>
  <li>Development Tutorial</li>
  <li>How to blog</li>
  <li>Youtube playlist</li>
</ul>
<ul className='flex flex-row gap-3 mr-[100px] '>
  <li className='font-bold'>Social Links</li>
  <li>
<BsLinkedin className='text-2xl cursor-pointer'/>

  </li>
  <li >
<BsFacebook className='text-2xl cursor-pointer'/>

  </li>
  <li>
    <BsInstagram className='text-2xl cursor-pointer'/>
  </li>
  <li >
<BsGithub className='text-2xl cursor-pointer'/>

  </li>
</ul>
</div>
    </footer>
    
    <div>
<div className='flex justify-center align-center font-bold '>
<p>&copy;2024 Shop.co. all rights reserverd</p>
</div> 

    </div>
    </>
    
  )
}

export default Footer