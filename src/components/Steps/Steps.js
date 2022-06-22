import React from 'react'
import './steps2.css'
import './mediasteps2.css'

import idea from '../images/idea_img.png'
import branstorming from '../images/brainstorming_img.png'
import up from '../images/up_img.png'
import goal from '../images/goal_img.png'

function Steps() {
  return (
    <>
    <div className='steps__Container'>
        <div className='steps__Heading'>
            <p>We prepare you for success in your<br/><span>entire stock market lifecycle</span></p>
        </div>
        <div className='steps__Box'>
            <div className='step'>
                <div className='step__Text'>
                    <span className='step__Number'>
                        STEP 1
                    </span>
                    <p className='step__Heading'>
                        <span className='step__HeadingBold'>
                            Join&nbsp;
                        </span>
                        us from anywhere, anytime
                    </p>
                    <p className='step__P'>
                        breakout university is easily accessible
                        over the internet, allowing you to learn,
                        trade and succeed wherever and whenever
                        you want.
                    </p>
                </div>
                <div className='step__Image'>
                    <img src={idea} />
                </div>
            </div>

            <div className='step'>
                <div className='step__Image'>
                    <img src={up} />
                </div>
                <div className='step__Text'>
                    <span className='step__Number'>
                        STEP 2
                    </span>
                    <p className='step__Heading'>
                        <span className='step__HeadingBold'>
                            Learn&nbsp;
                        </span>
                        with on-demand online lessons and daily interactive Q&A sessions
                    </p>
                    <p className='step__P'>
                        Get unrestricted access to our expert-led daily sessions and interactive Q&A programs. 
                        Our all-inclusive and engaging
                        online stock trading courses are designed to help you grasp
                        all fundamental concepts and get you ready to make profitable market moves.
                    </p>
                </div>

                
            </div>

            <div className='step'>
                <div className='step__Text'>
                    <span className='step__Number'>
                        STEP 3
                    </span>
                    <p className='step__Heading'>
                        <span className='step__HeadingBold'>
                            Practice&nbsp;
                        </span>
                        with live trading sessions led by expert traders and advisors
                    </p>
                    <p className='step__P'>
                        Ever wondered how exactly people trade stocks in the real world and make money? Our live 
                        stock market trading sessions will walk you through the process and give you the confidence to make your first trade! 
                    </p>
                </div>
                <div className='step__Image'>
                    <img src={branstorming} />
                </div>
            </div>
            
            <div className='step'>
                <div className='step__Image'>
                    <img src={goal} />
                </div> 
                <div className='step__Text'>
                    <span className='step__Number'>
                    STEP 4
                    </span>
                    <p className='step__Heading'>
                        Losses, Experience and&nbsp;
                        <span className='step__HeadingBold'>
                            Profits
                        </span>
                        &nbsp;#athishaktham 🚀
                    </p>
                    <p className='step__P'>
                        Stock market is no rocket science. Still, it won’t be a smooth journey with instant returns. It is natural to make some 
                        losses, but we make sure that you learn from them and become successful traders just like us.
                    </p>
                </div>  
 
            </div>

        </div>
    </div>

{/* -------------------------------------------------------------- */}
        
        
        <div className='steps__ContainerMob'>
            <div className='steps__HeadingMob'>
                <p>Get everything you need in the entire&nbsp;<span>trade lifecycle</span></p>
            </div>

            <div className='steps__BoxMob'>
                <div className='stepMob'>
                    <div className='step__TextMob'>
                        <span className='step__NumberMob'>
                            STEP 1
                        </span>
                        <p className='step__HeadingMob'>
                            <span className='step__HeadingBoldMob'>
                                Onboard&nbsp;
                            </span>
                            new students anywhere they are
                        </p>
                        <p className='step__PMob'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed dignissim metus eu felis tincidunt 
                            tristique. Etiam congue venenatis nunc et blandit.
                        </p>
                    </div>
                    <div className='step__ImageMob'>
                        <img src={idea} />
                    </div>
                </div>

                

                <div className='stepMob'>
                    <div className='step__TextMob'>
                        <span className='step__NumberMob'>
                            STEP 2
                        </span>
                        <p className='step__HeadingMob'>
                            <span className='step__HeadingBoldMob'>
                                Learn&nbsp;
                            </span>
                            from online daily sessions and 
                            weekly QnA programs
                        </p>
                        <p className='step__PMob'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed dignissim metus eu felis tincidunt 
                            tristique. Etiam congue venenatis nunc et blandit.
                        </p>
                    </div>
                    <div className='step__ImageMob'>
                        <img src={up} />
                    </div>
                </div>

                <div className='stepMob'>
                    <div className='step__TextMob'>
                        <span className='step__NumberMob'>
                            STEP 3
                        </span>
                        <p className='step__HeadingMob'>
                            <span className='step__HeadingBoldMob'>
                                Practice&nbsp;
                            </span>
                            live trade sessions with experts and advisors
                        </p>
                        <p className='step__PMob'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed dignissim metus eu felis tincidunt 
                            tristique. Etiam congue venenatis nunc et blandit.
                        </p>
                    </div>
                    <div className='step__ImageMob'>
                        <img src={branstorming} />
                    </div>
                </div>
                
                <div className='stepMob'>
                    <div className='step__TextMob'>
                        <span className='step__NumberMob'>
                        STEP 4
                        </span>
                        <p className='step__HeadingMob'>
                            <span className='step__HeadingBoldMob'>
                                Earn&nbsp;
                            </span>
                            from the stock market #athishaktham 🚀
                        </p>
                        <p className='step__PMob'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed dignissim metus eu felis tincidunt 
                            tristique. Etiam congue venenatis nunc et blandit.
                        </p>
                    </div>    
                    <div className='step__ImageMob'>
                        <img src={goal} />
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Steps