import React from 'react'
import './discover2.css'
import './mediadiscover2.css'

function Discover() {
  return (
    <div className='discover__bg'>
        <div className='discover__Container'>
            <p className='discover__BoldText'>Discover<br /><span>Our Programs</span></p>
            <p className='discover__BoldTextMob'>Programs<br /><span>We Offered</span></p>
            <div className='programs__Container'>
                <div className='stockMarket__Basics'>
                    <p>
                        <span className='bold__Heading'>
                            Stock Market Basics<br/>
                        </span>
                        <span className='bold__Price'>
                            ₹9999/seat
                        </span>
                        <ul className='medium__List'>
                            <li>Weekly Live</li>
                            <li>Raise Ticket</li>
                            <li>Monthly Webinars</li>
                            <li>Group support from us</li>
                        </ul>
                        <div className='claimOff__Container'>
                            <div className='claimOff__ContainerText'>
                                <p className='claimOff__Text'>
                                    <span className='claimOff__TextBold'>Claim your 10% off - </span>
                                    if you have demat account through us
                                </p>
                                <a href='#' className='checkEligibility__Link'>Check Eligibility ></a>
                            </div>
                        </div>
                        <button className='bookMySeatSMB__Button'>Book My Seat</button>
                    </p>
                </div>
                <div className='option__Selling'>
                    <p>
                        <span className='bold__Heading'>
                            Option Selling<br/>
                        </span>
                        <span className='bold__Price'>
                            ₹4999/seat
                        </span>
                        <ul className='medium__List'>
                            <li>Live QnA</li>
                            <li>Raise Ticket</li>
                            <li>Monthly Webinars</li>
                            <li>Weekly Live</li>
                            <li>Group support from us</li>
                        </ul>
                        <button className='bookMySeatOS__Button'>Book My Seat</button>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Discover