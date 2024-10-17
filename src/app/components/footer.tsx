import React from 'react';
import { BsLinkedin, BsFacebook, BsInstagram, BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <footer className='bg-slate-50 text-black py-6'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 '>
          
          {/* Brand Section */}
          <div>
            <ul>
              <li className='font-bold text-xl'>SHOP.CO.</li>
              <li className='mt-3'>We have clothes that suit your style and which you are proud to wear, from women to men.</li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <ul>
              <li className='font-bold'>Company</li>
              <li className='mt-2'>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <ul>
              <li className='font-bold'>Help</li>
              <li className='mt-2'>Customer Support</li>
              <li>Delivery details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* FAQ Links */}
          <div>
            <ul>
              <li className='font-bold'>FAQ</li>
              <li className='mt-2'>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <ul>
              <li className='font-bold'>Resources</li>
              <li className='mt-2'>Free Books</li>
              <li>Development Tutorial</li>
              <li>How to Blog</li>
              <li>YouTube Playlist</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className='flex items-center mt-6 md:mt-0'>
            <span className='font-bold mr-3'>Social Links:</span>
            <BsLinkedin className='text-2xl cursor-pointer mr-3' />
            <BsFacebook className='text-2xl cursor-pointer mr-3' />
            <BsInstagram className='text-2xl cursor-pointer mr-3' />
            <BsGithub className='text-2xl cursor-pointer' />
          </div>
        </div>
      </footer>

      <div>
        <div className='flex justify-center align-center font-bold'>
          <p>&copy; 2024 Shop.co. All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;