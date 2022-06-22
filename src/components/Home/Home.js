import React from 'react'
import './home2.css'
import './mediahome2.css'

import breakout__Uni from "../images/svg/breakout_uty_logo.svg"
import whatsapp_Logo from "../images/whatsapp_Logo.png"
import whatsapp_LogoMob from "../images/mobile/contact_wtsp_icon.svg"
import virtualcampus from "../images/svg/end_to_end_hand_holding_icon.svg"
import practicallearning from "../images/svg/Group.svg"
import fortraders from "../images/svg/community_learning_icon.svg"

function Home() {
  return (
    <>
    <div className='home__PageContainer'>
      <div className='home__Page__bg'>
        <div className='logos__Top'>
          <img className='breakout__Logo' src={breakout__Uni} alt='bulu' />
          <button className='whatsapp__Button' variant="outlined"> <img src={whatsapp_Logo} /> <span className='whatsappButton__Text'>chat with us</span></button>
          <a className='whatsapp__ButtonMob' href='#' ><img src={whatsapp_LogoMob} /></a>
        </div>

        <div className='homePage__Text'>
            <div className='first__Line'>
              Digital Learning Platform        
            </div>
            <div className='first__LineMob'>
              <h5>Online Education</h5>        
            </div>

            <div className='bold__Text'>
              <span className='second__Line'>World's #1</span> Stock Market University
            </div>

            <div className='paragraph__Text'>
              Become a successful stock market trader and investor, learning directly from <strong>Sharique Samsudheen</strong> and his team of stock market experts!
            </div>
            <div className='paragraph__TextMob'>
              Open up a world of possibilities by learning directly from <strong>Sharique Samsudheen</strong> and team.
            </div>

            <button className='joinNow__Button'><span className='joinButton__Text'>Join Now</span></button> 
            <button className='enrollNow__Button'><span className='enrollButton__Text'>Enroll Now</span></button> 

            <p className='last__LineHome'>Trusted by over 3000+ Traders</p>
        </div> 
      </div>
      <div className='info__Container'>
        <div className='info__Box'>
          <div className='virtual__Campus'>
            <img src={virtualcampus} alt="Virtual campus.png"/>
            <p className='home__heading '>Virtual Campus Community</p>
            <p className='home__headingMob'>End-2-End Hand Holding</p>
            <p className='home__text'>
              The best environment to learn  and interact with budding traders just like you. 
              Trade and invest together, get expert help, or simply make new friends!
            </p>
            <p className='home__textMob'>
              Lorem ipsum dolor sit amet csectetur adipiscing elit. 
              Sed dignissim metus eu felis amet csectetur elit.
            </p>
          </div>
          <div className='practical__Learning'>
            <img src={practicallearning} alt="Practical Learning.png"/>
            <p className='home__heading'>Practical Learning</p>
            <p className='home__headingMob'>Community Learning</p>
            <p className='home__text'>
              Trading cannot be mastered through just theoretical knowledge. Our students get to trade with
              us, drawing from the experience and expertise of professional trading mentors.
            </p>
            <p className='home__textMob'>
              Lorem ipsum dolor sit amet csectetur adipiscing elit. 
              Sed dignissim metus eu felis amet csectetur elit.
            </p>
          </div>
          <div className='for__Traders'>
            <img src={fortraders} alt="For Traders.png"/>
            <p className='home__heading '>For Traders, By Traders</p>
            <p className='home__headingMob'>Trading Together</p>
            <p className='home__text'>
              With years of experience in the market, our mentors have seen it all. Whatever questions you
              have during your stock market journey, we will always be available to help make things right.
            </p>
            <p className='home__textMob'>
              Lorem ipsum dolor sit amet csectetur adipiscing elit. 
              Sed dignissim metus eu felis amet csectetur elit.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home