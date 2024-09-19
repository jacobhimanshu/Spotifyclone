import React, { useContext, useState } from 'react'
import { assets, songsData } from '../assets'
import { PlayerContext } from '../../Context/PlayerContext'
const Player = () =>{
  const {  track,seekbar,seekBg,playstatus,play,pause,time,previous,next,seekSong} = useContext(PlayerContext)
  return (
  <>
    <div className='h-[10%] bg-black flex justify-between item-Center text-white px-4'>
        <div className='hidden lg:flex items-center gap-4'>
            <img className='w-12' src={track.image} alt="" />
       <div>
        <p>{track.name}</p>
        <p>{track.desc.slice(0,12)}</p>
       </div>
    </div>
   

    
    <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-4  '>
                <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
                <img onClick={previous}  className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
                { playstatus 
                ?  <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" />
                : <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
               
                }
                
                <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
        </div>
        <div className='flex items-center gap-5'>
        <p>3:05</p>
        <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded full cursor-pointer'>
              <hr ref={seekbar} className='h-1 border-none w-28 bg-green-800 rounded-full' />
              
        </div>
        <p>5:03</p>
        </div>
    </div>

            <div className='hidden lg:flex items-center gap-2 opacity-75'>
              <img className='w-4'  src={assets.plays_icon} alt="" />
              <img className='w-4'  src={assets.mic_icon} alt="" />
              <img className='w-4'  src={assets.queue_icon} alt="" />
              <img className='w-4'  src={assets.speaker_icon} alt="" />
              <img className='w-4'  src={assets.volume_icon} alt="" />
              <div className='w-20 bg-slate-50 h-1 rounded'> 

              </div>
              <img className='w-4'  src={assets.zoom_icon} alt="" />



            </div>
    </div>
</>
  )
}

export default Player