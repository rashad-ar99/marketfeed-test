import React from 'react'
import './faq2.css'
import './mediafaq2.css'

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function FAQ() {
  return (
    <div className='faq__Container'>
        <div className='faq__Text'>
            <span className='faq__Heading'>Frequently Asked Questions</span>
            <div className='faq__Box firstFAQ'>
                <div className='faq firstFAQ'>
                    <div className = "firstbox">
                        <span className='question'>
                            How do I trust you? Are you even actually making profits? Isn’t this all a scam?
                        </span>
                        <a href="" className='expand'><RemoveIcon /></a>
                    </div>
                    <p className='answer'>
                        We completely understand your feelings. Even we had the same questions in mind when we started out and saw 
                        many “stock market gurus” in our journey. Please make sure that you ask for and see the Profit and 
                        Loss report of whoever you are learning trading from. With that being said, we will be showing our P&L statements 
                        when you join the programme. What is more interesting is Sharique Samsudheen has made his P&L public on social media. 
                    </p>
                </div>
                <div className='faq'>
                    <span className='question'>
                        If you are successful in trading, then why do you need to sell courses for money?
                    </span>
                    <a href="" className='expand'><AddIcon /></a>
                </div>
                <div className='faq'>
                    <span className='question'>
                        What is breakout university?
                    </span>
                    <a href="" className='expand'><AddIcon /></a>
                </div>
                <div className='faq'>
                    <span className='question'>
                        How do I join the university?
                    </span>
                    <a href="" className='expand'><AddIcon /></a>
                </div>
                <div className='faq'>
                    <span className='question'>
                        Will I get a certificate for completing the stock market trading course?
                    </span>
                    <a href="" className='expand'><AddIcon /></a>
                </div>
                <div className='faq'>
                    <span className='question'>
                        How exactly will your stock market trading courses help me start making money?
                    </span>
                    <a href="" className='expand'><AddIcon /></a>
                </div>
                <div className='faq last'>
                    <span className='question'>
                        What’s in it for me?
                    </span>
                    <a href="" className='expand'><AddIcon /></a>
                </div>
            </div>

        <div className="faq__BoxMob">
            <div className='faq first'>
                    <div className = "firstbox">
                        <span className='question'>
                            What is breakout university?                        </span>
                        <a href="" className='expand'><RemoveIcon /></a>
                    </div>
                    <p className='answer'>
                        The only ingredient you need to succeed in 
                        stock market. Learn the strategies, tips and
                        tricks used by Sharique Samsudheen to make
                        safe, consistent profits in the market.
                    </p>
                </div>
                <div className='faq'>
                    <span className='question'>
                        How can I join in Breakout university?
                    </span>
                    <a href="" className='expand'><AddIcon /></a>
                </div>
                <div className='faq'>
                    <span className='question'>
                        Will I get any certification for this course?
                    </span>
                    <a href="" className='expand'><AddIcon /></a>
                </div>
                <div className='faq'>
                    <span className='question'>
                        How exactly would you help me to sort my personal finances?
                    </span>
                    <a href="" className='expand'><AddIcon /></a>
                </div>
                <div className='faq last'>
                    <span className='question'>
                        Why are you doing all this?
                    </span>
                    <a href="" className='expand'><AddIcon /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FAQ