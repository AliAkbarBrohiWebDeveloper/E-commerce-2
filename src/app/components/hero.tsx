
import React from 'react'


const Hero = () => {
    return (
        <>
            <main className='mt-[30px] mx-9 '>
                <section className='flex gap-6 items-center flex-col md:flex-row '>
                


                    <div className='flex-1'>
                        <h1 className='font-bold text-4xl'>FIND CLOTHES</h1>
                        <h1 className='font-bold text-4xl'>THAT MATCHES</h1>
                        <h1 className='font-bold text-4xl'>YOUR STYLE</h1>
                        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aliquam itaque! Recusandae consequatur voluptate aliquid, </p>
                        <button className=' py-2 px-4 mt-3 font-bold bg-black text-white  rounded-lg hover:scale-105 duration-300 '>Shop Now</button>
                        <div className='flex justify-between mt-5 flex-col md:flex-row'>
                            <div>
                                <h1 className='font-bold text-2xl sm:text-4xl'>200+</h1>
                                <p>International Products</p>
                            </div>
                            <div>
                                <h2 className='font-bold text-2xl sm:text-4xl'>20000+</h2>
                                <p>High Quality products</p>
                            </div>
                            <div>
                                <h3 className='font-bold text-2xl sm:text-4xl'>30000+</h3>
                                <p>Happy Cutomers</p>
                            </div>
                        </div>




                    </div>
                    <div>

                        <img src="/pro.png" alt="profile" height={500} width={500}  />
                        

                    </div>
                </section>


            </main>

<div className='flex justify-center font-bold text-3xl mt-[100px]'>

<h1>New Arrivals</h1>

</div>

<div className='flex justify-evenly items-center mt-9 flex-col md:flex-row'>

    <div>

<img src="td.png" alt="t-shirt" height={200} width={200} className='transition-transform duration-500 ease-in-out transform hover:scale-90'/>
<p className='font-bold'>T-shirt with Tap Details</p>
<span> <b className='text-green-500'>$120 </b></span>

    </div>
    <div>

        <img src="jeans.webp" alt="jeans" height={200} width={200} className='transition-transform duration-500 ease-in-out transform hover:scale-90'/>
        <p className='font-bold'>Skinny fit Jaeans</p>
        <span><b className='mx-3 text-green-500'> $100 </b> <del className='text-rose-600'>$150</del></span>
    </div>
    <div>
<img src="chek.webp" alt="cheacker" height={200} width={200} className='transition-transform duration-500 ease-in-out transform hover:scale-90' />
<p className='font-bold'>Cheakered Shirt</p>
<span> <b className='mx-3 text-green-500'>$150 </b> <del className='text-rose-600'>$200</del></span>

    </div>
    <div>
        <img src="sl.jpg" alt=" sleave t-shirt" height={200} width={200} className='transition-transform duration-500 ease-in-out transform hover:scale-90' />
        <p className='font-bold'>Sleave Striped T-shirt</p>
        <span> <b className='mx-3 text-green-500'> $140</b> <del className='text-rose-600'>$200</del></span>
    </div>
    
</div>
<div className='flex justify-center mt-9'>
<button className='py-2 px-6 rounded-lg  hover:scale-105 duration-300 bg-teal-500 '>View All</button>
</div>
<br />
<hr />

<div className='flex justify-center mt-[50px]'>
<h1 className='font-bold text-2xl'>Top Selling</h1>

</div>
<div className='flex justify-evenly items-center mt-6 flex-col md:flex-row'>

    <div>

        <img src="ve.webp" alt="vertical shirt" height={200} width={200} className='transition-transform duration-500 ease-in-out transform hover:scale-x-110' />
        <p>Vertical t-shirt </p>
        <span><b className='text-green-500'>$220</b><del className='mx-3 text-rose-600'>$240</del></span>
    </div>
    <div>

        <img src="ss.jpg" alt="" height={200} width={200} className='transition-transform duration-500 ease-in-out transform hover:scale-x-110'/>
        <p>Courage Graphic T-shirt</p>
        <span><b className='text-green-500'>$250</b> <del className='mx-3 text-rose-600'>$300</del></span>
    </div>
    <div>

        <img src="bb.jpg" alt="" height={200} width={200} className='transition-transform duration-500 ease-in-out transform hover:scale-x-110' />
        <p>Lose Fit Bermuda  Shorts</p>
        <span><b className='text-green-500'>$200</b> <del className='mx-3 text-rose-600'>$250</del></span>
    </div>
    <div>

        <img src="jnn.jfif" alt="" height={200} width={200} className='transition-transform duration-500 ease-in-out transform hover:scale-x-110' />
        <p className='font-bold '>Faded skinny jeans</p>
        <span><b className='text-green-500'>$120</b> <del className='mx-3 text-rose-600'>$150</del></span>
    </div>



</div>


<div className='flex justify-center mt-9'>
    <button className='  py-2 px-6 rounded-lg  mx-3 hover:scale-105 duration-300 bg-teal-500'>View All</button>
</div>
<br />
<br />

<div className='flex justify-center items-center'>

    <h1 className='font-bold'>Browse By Dress Style</h1>
</div>
<div className='flex justify-evenly items-center mt-9 flex-col md:flex-row '>

<div>
<p className='font-bold'>Causal </p>
    <img src="cc.webp" alt="causal" height={200} width={200} className='transition-transform duration-500 ease-in-out transform hover:scale-x-110'/>
</div>
<div>
<p className='font-bold '>Formal</p>
    <img src="ff.jpg" alt="formal"height={50} width={200} className='transition-transform duration-500 ease-in-out transform hover:scale-x-110' />
</div>

</div>

<div>

    <h1 className='font-bold mx-5 mt-[60px]'>OUR HAPPY CUSTOMERS</h1>
</div>
<div className='flex justify-evenly items-center gap-9 flex-col md:flex-row'>

    <div className='mx-6 mt-6 border-8 rounded-2xl my-6 hover:border-red-500'>
<h1 className='font-bold'>Sarah.M</h1>
<p>I am blown away by the quaility and style of the clothes I recieved from shop.co.from causal weay to elegant dresses ,every piece I have bought has excedded my expectations.</p>

    </div>
    <div className='my-5 border-8 rounded-2xl hover:border-red-500 hidden sm:block'>
<h1 className='font-bold'>Alex k.</h1>
<p>Finding clothes that align with my  personal style used to be a challenge unatil I discovered shop.co. the range of options they offer is truly remarable.</p>

    </div>
    <div className='mt-4 border-8 rounded-2xl my-6 hover:border-red-500 hidden sm:block'>
        <h3 className='font-bold'>James L.</h3>
        <p>As somone who always lookout for unique fashion pieces.I am thrilled to have stumbled shop.co. The selection of clothes only is not diverse but on-point with latest trends</p>
    </div>
</div>


<div className='bg-black text-white mx-6 my-6 h-[150px] rounded-2xl'>
  <section className='flex flex-col md:flex-row items-center justify-between p-6'>
    
    {/* Text Section */}
    <div className='mt-4 md:mt-0 font-extrabold text-center md:text-left'>
      <h4>STAY UP TO DATE ABOUT</h4>
      <h5>OUR LATEST OFFERS</h5>
    </div>

    {/* Input and Button Section */}
    <div className='mt-4 w-full md:w-auto flex flex-col items-center md:items-start'>
      <input 
        type="email" 
        placeholder='Enter your email address' 
        className='w-full md:w-[300px] h-9 rounded-2xl px-3' 
      />
      <button className='bg-white mt-3 text-black w-full md:w-[300px] h-9 rounded-2xl'>
        Subscribe to newsletter
      </button>
    </div>
    
  </section>
</div>





        </>
    )
}

export default Hero