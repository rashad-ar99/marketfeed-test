import React from 'react'
import './offer2.css'
import './mediaoffer2.css'
import cycling from '../images/svg/join_discord_img.svg'
import discord_logo from '../images/mobile/discord_logo.svg'

function Offer() {
  return (
    <div className='offer__Section'>
        <div className='offer__SectionInternalBG'>
            <div className='offer__SectionInternal'>
                <div className='offer__Heading'>
                    <span>Limited Period Offer</span>
                </div>
                <div className='offer__Bold'>
                    <span>We have everyone covered.<br/>Join FREE Section</span>
                </div>
                <div className='offer__BoldMob'>
                    <span>Get into our community for FREE</span>
                </div>
                <p className='offer__Text'>
                    There is space for everyone! Join the FREE section of our virtual
                    campus on Discord and connect with like-minded students and stock market trading experts.
                    Talk to us directly there and get onboarded onto the stock market world.
                </p>
                <p className='offer__TextMob'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed dignissim metus eu felis tincidunt tristique. Etiam 
                    congue venenatis nunc et blandit.
                </p>
                
                <button className='takeMeThere__Button'>Take Me There</button>
                <button className='takeMeThere__ButtonMob'><img className='discord_logo' src={discord_logo} />Join Discord</button>
                {/* <button className='takeMeThere__ButtonMob' variant="outlined"> <img src={discord_logo} /> <span className='takeMeThere__ButtonMobText'>Join Discord</span></button> */}
                {/* <img className='bgMob' src={bg}/> */}
                <img className='cycling' src={cycling}/>
            </div>
        </div>
    </div>
  )
}

export default Offer