import React, { useState } from 'react'

function Clients() {

  const [move, setMove] = useState(0)
  const [Carousel, setCarousel] = useState(0)
  return (
    <div className='w-[100%] h-[240vh] relative bg-gray-200 flex  justify-center items-center flex-col gap-3 '>

      <div className='text-green-500  text-[20px] font-serif font-[600] '>Our Clients</div>
      <label className='text-black text-[58px] w-[75%] text-center font-bold'> Glint has been honored to partner up with these clients</label>

      <div className='w-[100%] h-[60vh] flex items-center justify-center flex-col  ' >
        <div className='w-[80%] h-[25vh] overflow-hidden'>
          <div style={{ transform: `translateX(-${move}%)` }} className=' icon-Client w-[200%] h-[100%] text-[123px] flex gap-16 text-[#686868]'>
            <i class="fa fa-apple" aria-hidden="true"></i>
            <i class="fa fa-ravelry" aria-hidden="true"></i>
            <i class="fa fa-grav" aria-hidden="true"></i>
            <i class="fa fa-opera" aria-hidden="true"></i>
            <i class="fa fa-scribd" aria-hidden="true"></i>
            <i class="fa fa-xing" aria-hidden="true"></i>
            <i class="fa fa-quora" aria-hidden="true"></i>
            <i class="fa fa-firefox" aria-hidden="true"></i>
            <i class="fa fa-apple" aria-hidden="true"></i>
            <i class="fa fa-ravelry" aria-hidden="true"></i>
            <i class="fa fa-grav" aria-hidden="true"></i>
            <i class="fa fa-opera" aria-hidden="true"></i>
          </div>
        </div>
        <div className='flex items-center justify-center h-[10vh] w-[100%] gap-3'>
          <div onClick={() => setMove(0)} style={{ backgroundColor: move == 0 && "green" }} className='bg-gray-400 h-[12px] w-[12px] rounded-full'></div>
          <div onClick={() => setMove(15)} style={{ backgroundColor: move == 15 && "green" }} className='bg-gray-400 h-[12px] w-[12px] rounded-full'></div>
          <div onClick={() => setMove(33)} style={{ backgroundColor: move == 33 && "green" }} className='bg-gray-400 h-[12px] w-[12px] rounded-full'></div>
          <div onClick={() => setMove(49.5)} style={{ backgroundColor: move == 49.5 && "green" }} className='bg-gray-400 h-[12px] w-[12px] rounded-full'></div>
        </div>
      </div>

      <hr className='h-[2px] bg-gray-400 w-[50%] '></hr>

      <div className='h-[40%] w-[100%]  flex items-center justify-center text-[black] text-[30px]'  >
        <i onClick={() => Carousel > 0 ? setCarousel(Carousel - 33.33) : null} class="fa fa-arrow-left" aria-hidden="true"></i>

        <div className='h-[100%] w-[75%]  bg  items-center justify-center overflow-hidden'>

          <div style={{ transform: `translateX(-${Carousel}%)` }} className='Client-div h-[100%] w-[300%]   flex items-center '>

            <div className='h-[80%] w-[100%]  flex flex-col items-center justify-center'>
              <div className='h-[70%] w-[90%]  flex items-center justify-center text-[grey]'>Apple Inc. is an American multinational technology company that revolutionized the technology sector through its innovation of computer software, personal computers, mobile tablets, smartphones, and computer peripherals</div>
              <img className='h-[90px] w-[90px] rounded-full' src='https://preview.colorlib.com/theme/glint/images/avatars/user-01.jpg'></img>
              <label className='text-[black]  text-[17px] font-[700]'>Tim Cook</label>
              <label className='text-[grey]  text-[17px] '>CEO, Apple</label>
            </div>
            <div className='h-[80%] w-[100%]  flex flex-col items-center justify-center' >
              <div className='h-[70%] w-[90%]  flex items-center justify-center text-[grey]'> Google is an American multinational corporation from the United States. known for creating and running one of the largest search engines on the World Wide Web, also known as the (WWW). Every day more than a billion people use it.</div>
              <img className='h-[90px] w-[90px] rounded-full' src='https://preview.colorlib.com/theme/glint/images/avatars/user-02.jpg'></img>
              <label className='text-[black]  text-[17px] font-[700]'>Sundar Pichai</label>
              <label className='text-[grey]  text-[17px] '>CEO, Google</label>
            </div>
            <div className='h-[80%] w-[100%]  flex flex-col items-center justify-center'>
              <div className='h-[70%] w-[90%]  flex items-center justify-center text-[grey]'>Microsoft Corporation is an American multinational corporation and technology company headquartered in Redmond, Washington. Its best-known software products are the Windows line of operating systems, the Microsoft 365 suite of productivity applications, the Azure cloud computing platform and the Edge web browser.</div>
              <img className='h-[90px] w-[90px] rounded-full' src='https://preview.colorlib.com/theme/glint/images/avatars/user-05.jpg'></img>
              <label className='text-[black]  text-[17px] font-[700]'>Satya Nadell</label>
              <label className='text-[grey]  text-[17px] '>CEO, Microsoft</label>
            </div>
          </div>

        </div>
        <i onClick={() => Carousel < 60 ? setCarousel(Carousel + 33.33) : setCarousel(0)} class="fa fa-arrow-right" aria-hidden="true"></i>
      </div>

    </div>
  )
}

export default Clients