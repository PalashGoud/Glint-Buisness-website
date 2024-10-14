import React from 'react'

function Last() {
  return (
    <div className='h-[80vh] w-[100%] bg-[#111111] flex flex-col items-center justify-center gap-6'>
        <div className='h-[50vh] w-[70%]  flex items-center gap-[10%]  '>
            <div className='w-[40%] h-[90%] text-gray-500  flex flex-col gap-9 '>
                <img className='h-[30px] w-[25%]' src='https://preview.colorlib.com/theme/glint/images/logo-footer.png'></img>
                Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt. Quaerat voluptas autem necessitatibus vitae aut.
                </div> 

            <div className='w-[50%] h-[90%] text-gray-500 flex flex-col gap-9'>
                <label className='text-white font-[600] text-[17px]'>Get Notified</label>Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt iusto porro.
               <div className='w-[100%] h-[20%]' >
                <input placeholder="Email Address" className='h-[100%] outline-none w-[70%] bg-[#0F0F0F] border-none '></input>
                <button className='button-last h-[100%] w-[30%] bg-[#39B54A] text-white'>SUBSCRIBE</button>
               </div>
                </div>                                         
        </div>
        <div className=' h-[10vh] w-[40%] flex items-center  text-gray-600  justify-center'>© Copyright Glint 2022 <hr className='h-[10px] w-[2px] text-gray-600 rotate-90 pl-[90px]'></hr>Site made by <label className='palash text-[#39B54A] pl-2 font-[600] '>Palash Goud</label></div>
    </div>
  )
}

export default Last