import React from 'react'

function Contact() {
  return (
    <div className='w-[100%] h-[200vh]  relative bg-black flex  justify-center items-center flex-col gap-4  relative' id='contact'>
      <img className=' brightness-50 object-cover h-[200vh]' src='https://preview.colorlib.com/theme/glint/images/contact-bg.jpg'></img>


      <div className='h-[200vh] w-[100vh] absolute flex items-center justify-center flex-col gap-10'>
        <div className='text-green-500  text-[20px] font-serif font-[600] '>Contact Us</div>
        <label className='text-white text-[58px] w-[150%] text-center font-bold'> Reach out for a new project or just say hello</label>

        <div className='h-[120vh] w-[150%] flex'>
          <div className='h-[100%] w-[70%]  flex flex-col items-center justify-center bg-[#0000006d]'>
            <div className=' h-[80%] w-[90%] flex flex-col gap-12'>
              <label className='text-white font-[600] '>SEND US A MESSAGE </label>
              <div className='h-[90%] w-[100%]  flex flex-col gap-2 '>
                <input placeholder="Your Name" className='w-[100%] h-[12%] bg-transparent border-b-2 outline-none border-gray-800 text-[#39B54A]' ></input>
                <input placeholder="Your Email" className='w-[100%] h-[12%] bg-transparent border-b-2 outline-none border-gray-800 text-[#39B54A]' ></input>
                <input placeholder="Subject" className='w-[100%] h-[12%] bg-transparent border-b-2 outline-none border-gray-800 text-[#39B54A]' ></input>
                <textarea  placeholder="Message"className='w-[100%] h-[42%] bg-transparent border-b-2 outline-none border-gray-800 text-[#39B54A]' ></textarea>

                <button className='button-contact h-[12%] w-[100%] bg-[#39B54A] text-white'>SUBMIT</button>


              </div>


            </div>
          </div>


          <div className='h-[100%] w-[35%] bg-[#121212]  flex flex-col pl-8 justify-center gap-[60px]'>
            <label className='text-white font-[600] '>CONTACT INFO</label>
            <div className='flex flex-col gap-5 w-[80%]'>
              <label className='text-[#39B532] text-[16px] font-[600]' >Where to Find Us</label>
              <label className='text-gray-500 tracking-wide'>1600 Amphitheatre Parkway
                Mountain View, CA 94043 US</label>
            </div>

            <div className='flex flex-col gap-5 w-[80%]'>
              <label className='text-[#39B532] text-[16px] font-[600]' >Email Us At</label>
              <label className='text-gray-500 tracking-wide'>contact@glintsite.com
                info@glintsite.com</label>
            </div>

            <div className='flex flex-col gap-5 w-[80%]'>
              <label className='text-[#39B532] text-[16px] font-[600]' >Call Us At</label>
              <label className='text-gray-500 tracking-wide'>Phone: (+63) 555 1212
                Mobile: (+63) 555 0100
                Fax: (+63) 555 0101</label>
            </div>

            <div className='text-white text-[22px] flex  gap-3'>
              <i class=" contact-icon fa fa-facebook" aria-hidden="true"></i>
              <i class=" contact-icon fa fa-twitter" aria-hidden="true"></i>
              <i class=" contact-icon fa fa-instagram" aria-hidden="true"></i>
              <i class=" contact-icon fa fa-behance" aria-hidden="true"></i>
              <i class=" contact-icon fa fa-dribbble" aria-hidden="true"></i>
            </div>

          </div>
        </div>


      </div>
    </div>
  )
}

export default Contact