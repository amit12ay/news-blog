import React from 'react';
import Heading from '../../../../../common/heading/Heading';
import SocialMedia from './social/SocialMedia';
import "./side.css"
import Tpost from './tpost/Tpost';
import { gallery } from '../../../../../../dummyData';

const Side = () => {
     const category =["world","travel","sport","fun","health","fashion","business","technology"]
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
    <section className='categorys'>
     <Heading title='Categorys'/>
     {category.map((val)=>{
          return(
               <div className='category category1'>
                    <span>{val}</span>
               </div>
          )
     })}
    </section>

    <section className='gallery'>
     <Heading title='Gallery'/>
     {gallery.map((val)=>{
          return(
               <div className='img'>
                    <img src={val.cover} alt=''/>
               </div>
          )
     })}
    </section>
   </>  
  )
}
export default Side
 