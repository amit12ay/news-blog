import React from 'react';
import Heading from '../../../../../common/heading/Heading';
import SocialMedia from './social/SocialMedia';
import "./side.css"
import Tpost from './tpost/Tpost';

const Side = () => {
  return (
   <>
   <Heading title='Stay Connected' />
   <SocialMedia/>

   <Heading title='Subscribe' />
   <section className='subscribe'>
    <h1 className='title'>Subscribe to our New Stories</h1>
    <form action=''>
         <input type='text' placeholder='Email Address...'/>
         <button>
          <i className='fa fa-paper-plane'></i> SUBMIT
         </button>
    </form>
   </section>
   <section className='banner'>
        <img src='./images/sidebar-banner-new.jpg' alt=''/>
    </section>  
    <Tpost/>
   </>
  )
}

export default Side
 