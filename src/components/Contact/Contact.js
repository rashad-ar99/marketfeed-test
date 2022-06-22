import React from 'react'
import './contact2.css'
import './mediacontact2.css'
import contact_img from '../images/customer_service_img.png'

function Contact() {
  return (
    <div className='contact__Container'>
        <div className='contact__Text'>
            <span className='contact__TextBold'>
                Talk to Us
            </span>
            <div className='contact__Box'>
                <div className='contact__Method first'>
                    Send us an Email
                    <p className='email'>hello@fundfolio.in</p>
                </div>
                <div className='contact__Method second'>
                    Give us a call
                    <p className='number'>+91 99006 63322</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact