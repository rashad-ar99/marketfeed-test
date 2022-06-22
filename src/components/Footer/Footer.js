import React from 'react'
import './footer2.css'
import './mediafooter2.css'

import breakout__Uni from "../images/mobile/breakout_uty_logo_light.svg"
import fundfolio from '../images/fundfolio_logo.png'
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import heart from '../images/heart_img.png'

function Footer() {
  return (
    <div className='footer__Container'>
        <div className='footer__Box'>
            <div>
                <img className='logo__Footer' src={fundfolio} />
                <img className='logo__FooterMob' src={breakout__Uni} />
                <p className='address'>
                    kinfra Hi-tech park<br/>
                    kalamassery, kochi<br/>
                    kerala 683503
                </p>
                <div className='logos'>
                    <a href='#'><YouTubeIcon className='youtube' /></a>
                    <a href='#'><InstagramIcon className='insta' /></a>
                    <a href='#'><TwitterIcon className='twitter' /></a>
                    <a href='#'><FacebookIcon  className='fb' /></a>
                </div>
            </div>

            {/* <div className='two_inrow'>
                <div className='products'>
                    <div className='heading'>
                        products
                    </div>
                    <div className='item'>
                        <a href='#'>marketfeed.news</a>
                    </div>
                    <div className='item'>
                        <a href='#'>marketfeed.app</a>
                    </div>
                    <div className='item'>
                        <a href='#'>breakout</a>
                    </div>
                </div>

                <div className='company'>
                    <div className='heading'>
                        company
                    </div>
                    <div className='item'>
                        <a href='#'>about</a>
                    </div>
                    <div className='item'>
                        <a href='#'>career</a>
                    </div>
                </div>
            </div> */}

            <div className='products'>
                <div className='heading'>
                    products
                </div>
                <div className='item'>
                    <a href='#'>marketfeed.news</a>
                </div>
                <div className='item'>
                    <a href='#'>marketfeed.app</a>
                </div>
                <div className='item'>
                    <a href='#'>breakout</a>
                </div>
            </div>

            <div className='company'>
                <div className='heading'>
                    company
                </div>
                <div className='item'>
                    <a href='#'>about</a>
                </div>
                <div className='item'>
                    <a href='#'>career</a>
                </div>
            </div>

            <div className='more'>
                <div className='heading'>
                    more
                </div>
                <div className='item'>
                    <a href='#'>disclaimer</a>
                </div>
                <div className='item'>
                    <a href='#'>help & support</a>
                </div>
                <div className='item'>
                    <a href='#'>privacy policy</a>
                </div>
                <div className='item'>
                    <a href='#'>terms & conditions</a>
                </div>
            </div>
        </div>
        <div className='last__Line'>
                made with&nbsp;<img src={heart}/>&nbsp;by fundfolio
        </div>
    </div>

  )
}

export default Footer