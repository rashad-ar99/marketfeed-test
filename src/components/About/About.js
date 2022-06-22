import React from 'react'
import './about2.css'
import './mediaabout2.css'

function About() {
  return (
    <div className='about__Container'>
        <div className='about__TextBold'>
            <p>About <span>Breakout University</span></p>
        </div>
        <div className='about__InfoText'>
            <p>
                breakout university is an online stock market learning platform on a mission to democratize the stock market. Since our establishment, 
                we have helped thousands of students just like you learn how to navigate the stock market and become successful traders.
            </p>
            <br />
            <p>
                Our stock trading training platform is an educational initiative of fundfolio and the vision of Sharique Samsudheen, specially designed 
                to help you break out into the world of stock market and claim your financial freedom.
            </p>
       </div>
       <div className='about__InfoTextMob'>
            <p>
            The only ingredient you need to succeed in stock market. Learn the strategies, tips and tricks used by Sharique Samsudheen to 
            make safe, consistent profits in the market.. <a href='#'>more</a>
            </p>
       </div>
       <div className='about__Data'>
            <span className='followers__Light'><span className='followers__Bold'>800k+<br/></span>followers</span>
            <span className='students__Light'><span className='students__Bold'>100k+<br/></span>students</span>
            <span className='traders__Light'><span className='traders__Bold'>3000+<br/></span>traders</span>
        </div>
        <div className='about__DataMob'>
            <p className='followers__Light'><span className='followers__Bold'>1500+<br/></span>followers</p>
            <p className='students__Light'><span className='students__Bold'>6300+<br/></span>students</p>
            <p className='traders__Light'><span className='traders__Bold'>900+<br/></span>traders</p>
        </div>

    </div>
  )
}

export default About