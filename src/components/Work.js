import React from 'react'

function Work() {
  return (
   
    <div className='w-[100%] h-[103vh] relative bg-black flex  items-center flex-col ' id='work' >
      <div className='w-[60%] h-[60vh] flex items-center justify-center flex-col'>
    <div className='text-green-500  text-[20px] '>Recent Works</div>
    <label className='text-white text-[50px] w-[100%] text-center font-bold'> We love what we do, check out some of our latest works</label>
    <hr className='w-[40%] bg-slate-400 mt-5'></hr>
    </div>
    <div className='flex justify-center absolute top-[55%]  w-full'>
        <div className='flex flex-col w-[40%]'>
            <div className='image-div-work relative'>
            <div className='icon-work w-10 h-10 rounded-full border-2 border-white text-white flex items-center justify-center text-[18px] absolute'>
            <i class="fa fa-link" aria-hidden="true"></i>
            </div>
            <div className='plus absolute text-[white] text-[30px]'>+</div>
            <div className='text-work absolute flex flex-col'>
                <label className='text-[white] font-[700]'>Shutter</label>
                <label className='text-[grey]'>Branding</label>
            </div>
                <img  src='https://preview.colorlib.com/theme/glint/images/portfolio/lady-shutterbug.jpg'></img>
            </div>
            <div className='image-div-work relative'>
            <div className='icon-work w-10 h-10 rounded-full border-2 border-white text-white flex items-center justify-center text-[18px] absolute'>
            <i class="fa fa-link" aria-hidden="true"></i>
            </div>
            <div className='plus absolute text-[white] text-[30px]'>+</div>
            <div className='text-work absolute flex flex-col'>
                <label className='text-[white] font-[700]'>THE BEETLE</label>
                <label className='text-[grey]'>Web Development</label>
            </div>
                <img  src='https://preview.colorlib.com/theme/glint/images/portfolio/the-beetle.jpg'></img>
            </div>
            <div className='image-div-work relative'>
            <div className='icon-work w-10 h-10 rounded-full border-2 border-white text-white flex items-center justify-center text-[18px] absolute'>
            <i class="fa fa-link" aria-hidden="true"></i>
            </div>
            <div className='plus absolute text-[white] text-[30px]'>+</div>
            <div className='text-work absolute flex flex-col'>
                <label className='text-[white] font-[700]'>GUITARIST</label>
                <label className='text-[grey]'>Branding</label>
            </div>
                <img  src='https://preview.colorlib.com/theme/glint/images/portfolio/guitarist.jpg'></img>
            </div>
        </div>
       
        <div className='flex flex-col w-[40%]'>
        <div className='image-div-work relative'>
            <div className='icon-work w-10 h-10 rounded-full border-2 border-white text-white flex items-center justify-center text-[18px] absolute'>
            <i class="fa fa-link" aria-hidden="true"></i>
            </div>
            <div className='plus absolute text-[white] text-[30px]'>+</div>
            <div className='text-work absolute flex flex-col'>
                <label className='text-[white] font-[700]'>WOODCRAFT</label>
                <label className='text-[grey]'>Web Design</label>
            </div>
                <img  src='https://preview.colorlib.com/theme/glint/images/portfolio/woodcraft.jpg'></img>
            </div>
            <div className='image-div-work relative'>
            <div className='icon-work w-10 h-10 rounded-full border-2 border-white text-white flex items-center justify-center text-[18px] absolute'>
            <i class="fa fa-link" aria-hidden="true"></i>
            </div>
            <div className='plus absolute text-[white] text-[30px]'>+</div>
            <div className='text-work absolute flex flex-col'>
                <label className='text-[white] font-[700]'>GROW GREEN</label>
                <label className='text-[grey]'>Branding</label>
            </div>
                <img  src='https://preview.colorlib.com/theme/glint/images/portfolio/grow-green.jpg'></img>
            </div>
            <div className='image-div-work relative'>
            <div className='icon-work w-10 h-10 rounded-full border-2 border-white text-white flex items-center justify-center text-[18px] absolute'>
            <i class="fa fa-link" aria-hidden="true"></i>
            </div>
            <div className='plus absolute text-[white] text-[30px]'>+</div>
            <div className='text-work absolute flex flex-col'>
                <label className='text-[white] font-[700]'>PALMEIRA</label>
                <label className='text-[grey]'>Branding</label>
            </div>
                <img  src='https://preview.colorlib.com/theme/glint/images/portfolio/palmeira.jpg'></img>
            </div>
        </div>
       
    </div>
</div>
)
}

export default Work