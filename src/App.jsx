import React, { useContext } from 'react'
import Slidebar from './assets/component/Slidebar'
import Player from './assets/component/Player'
import Display from './assets/component/Display'
import {PlayerContext} from './Context/PlayerContext'

const  App = () => {
  const {audioRef , track} = useContext(PlayerContext);

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Slidebar/>
        <Display/>
      </div>
      <Player/>
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App