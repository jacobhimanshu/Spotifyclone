import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets'
import Albumitem from '../Albumitem'
import { songsData } from '../assets'
import Songdaata from './Songdaata'

function DisplayHome() {
  return (
    <>

      <Navbar />
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
   { albumsData.map((item, index) => (<Albumitem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />)) }
        </div>
      </div>

      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's Hits</h1>
        <div className='flex overflow-auto'>
   { songsData.map((item,index)=>(<Songdaata key={index} name = {item.name} desc={item.desc} id={item.id} image={item.image}  />)) }
        </div>
      </div>


    </>
  )
}

export default DisplayHome