import React, { useState } from 'react'

function Header() {
  const [sidebar, setSidebar] = useState(false)
  return (

    <div className='header'>
      <img className='logo' src='https://preview.colorlib.com/theme/glint/images/logo.png'></img>
      <div onClick={() => setSidebar(true)} className='menu-bar'>
        <label className='menu-header'>MENU</label>
        <i class="fa fa-bars" aria-hidden="true"></i>
      </div>

      <div style={{ right: sidebar == true ? "0" : "-20%" }} className='w-[20%]  z-50 flex flex-col  items-center gap-[50px]  duration-300  h-[100vh] top-0 bg-black fixed'>
        <div className='w-[70%] h-[10%] flex justify-between items-center ' >
          <label className='font-serif text-[12px] tracking-widest text-[#39B54A]' >NAVIGATION</label>
          <div onClick={() => setSidebar(false)} className=' text-white '>
          <i class="fa fa-times" aria-hidden="true"></i>
          </div></div>

        <div className='w-[70%] h-[35%]  flex flex-col items-start gap-[15px]' >
          <a  className='button-header font-serif text-[20px]' href="#home">Home</a>
          <a  className='button-header font-serif text-[20px]' href="#about">About</a>
          <a  className='button-header font-serif text-[20px]' href="#services">Services</a>
          <a  className='button-header font-serif text-[20px]' href="#work">Work</a>
          <a  className='button-header font-serif text-[20px]' href="#clients">Clients</a>
          <a  className='button-header font-serif text-[20px]' href="#contact">Contact</a>
        </div>


        <div className='w-[70%] h-[25%]  flex items-center justify-center  ' >
          <label className='font-serif text-gray-600 text-[15px] '>Perspiciatis hic praesentium nesciunt. Et neque a dolorum voluptatem porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis neque reprehenderit.</label></div>

        <div className='h-[5%] w-[70%] flex gap-[7%]'>
          <i class="fa fa-facebook" aria-hidden="true"></i>
          <i class="fa fa-twitter" aria-hidden="true"></i>
          <i class="fa fa-instagram" aria-hidden="true"></i>
          <i class="fa fa-behance" aria-hidden="true"></i>
          <i class="fa fa-dribbble" aria-hidden="true"></i>
        </div>

      </div>
    </div>
  )
}


export default Header