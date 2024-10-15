import React from 'react'

function Intro() {
    return (
        <div className='intro'id="home">
            <img className='intro-image' src='https://preview.colorlib.com/theme/glint/images/hero-bg.jpg'></img>
            <div className='intro-content'>
                <div className='top-contents'>
                    <label className='intro-label'>WELCOME TO GLINT</label>
                    <label className='intro-para'>We are a creative group
                        of people who design
                        influential brands and
                        digital experiences.</label>
                </div>
                <div className='intro-logos'>
                    <div className='ineeer-int-logo'><label>facebook</label>  <div className='intro-l-1'><i class="fa fa-facebook" aria-hidden="true"></i></div></div>
                    <div className='ineeer-int-logo'><label>Twitter</label> <div className='intro-l-1'><i class="fa fa-twitter" aria-hidden="true"></i></div></div>
                    <div className='ineeer-int-logo'><label>Instagram</label>  <div className='intro-l-1'><i class="fa fa-instagram" aria-hidden="true"></i></div></div>
                    <div className='ineeer-int-logo'><label>behance</label>  <div className='intro-l-1'><i class="fa fa-behance" aria-hidden="true"></i></div></div>
                    <div className='ineeer-int-logo'><label>dribbble</label> <div className='intro-l-1'><i class="fa fa-dribbble" aria-hidden="true"></i></div></div>
                </div>
                <div className='intro-btns'>
                    <button className='button-intro'>START A PROJECT</button>
                    <button className='button-intro' >MORE ABOUT US</button>
                </div>
            </div>
        </div>
    )
}

export default Intro