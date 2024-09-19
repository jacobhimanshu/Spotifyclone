// import { createContext, useEffect, useRef, useState } from "react";
// import { songsData } from "../assets/assets";


//  export const PlayerContext = createContext();
//  const PlayerContextProvider = (props)=>{
//     const audioRef = useRef();
//     const seekBg = useRef();
//     const seekbar = useRef();

//         const [ track , setTrack] = useState(songsData[4]);
//         const [playstatus , setplaystatus ] = useState(false);
//         const [time,setTime] = useState({
//             currentime:{
//                 second : 0,
//                 minute : 0
//             },
//            Totaltime : {
//                 second:0,
//                 minute:0
//             }
//         })
 
//             const play = ()=>{
//                 audioRef.current.play();
//                 setplaystatus(true);

//                 const previous = async()=>{
//                         if(track.id>0){
//                             await setTrack(songsData[track.id-1]);
//                             await audioRef.current.play()
//                             setplaystatus(true);
//                         }
//                 }

                
//                 const next = async()=>{
//                     if(track.id<songsData.length-1){
//                         await setTrack(songsData[track.id+1]);
//                         await audioRef.current.play()
//                         setplaystatus(true);
//                     }
//             }

//             }
//             const pause=()=>{
//                 audioRef.current.pause();
//                 setplaystatus(false);
//             }
//             const PlaywithId = async(id) =>{
//                 await setTrack(songsData[id]);
//                 await audioRef.current.play();
//                 setplaystatus(true)
//             }

//             useEffect(()=>{
//                 setTimeout(()=>{
//                     audioRef.current.ontimeupdate = ()=>{
//                         seekbar.current.style.width = (Math.floor(audioRef.current.currentime/audioRef.current.duration*100))+"%";
//                         setTime(
//                             {
//                                 currentime:{
//                                     second :{
//             currentime:{
//                 second : 0,
//                 minute : 0
//             },
//            Totaltime : {
//                 second:0,
//                 minute:0
//             }
//         },
//                                     minute : 0
//                                 },
//                                Totaltime : {
//                                     second:0,
//                                     minute:0
//                                 }
//                             }
//                         )
//                     }
//                 })
//             },[audioRef])

//     const contextvalue = {
//             audioRef,
//             seekBg,
//             seekbar,
//             track, setTrack,
//             playstatus,setplaystatus,
//             time,setTime,
//             play,pause,PlaywithId,previous,next
//     }


//     return(
//         <PlayerContext.Provider value={contextvalue}>
//             {props.children}
//         </PlayerContext.Provider>
//     )
//  }
//  export default PlayerContextProvider;



import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef();
    const seekBg = useRef();
    const seekbar = useRef();

    const [track, setTrack] = useState(songsData[4]);
    const [playstatus, setplaystatus] = useState(false);
    const [time, setTime] = useState({
        currentime: {
            second: 0,
            minute: 0
        },
        Totaltime: {
            second: 0,
            minute: 0
        }
    });

    const play = () => {
        audioRef.current.play();
        setplaystatus(true);
    };

    const pause = () => {
        audioRef.current.pause();
        setplaystatus(false);
    };

    const previous = async () => {
        if (track.id > 0) {
            await setTrack(songsData[track.id - 1]);
            await audioRef.current.play();
            setplaystatus(true);
        }
    };

    const next = async () => {
        if (track.id < songsData.length - 1) {
            await setTrack(songsData[track.id + 1]);
            await audioRef.current.play();
            setplaystatus(true);
        }
    };

    const seekSong = async(e)=>{
        audioRef.current.currentTime = ((e.nativEvent.offsetX/seekBg.current.offsetWidth)*audioRef)
          }

    const PlaywithId = async (id) => {
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setplaystatus(true);
    };

    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekbar.current.style.width =
                    Math.floor((audioRef.current.currentTime / audioRef.current.duration) * 100) + "%";
                setTime({
                    currentime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60),
                    },
                    Totaltime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60),
                    }
                });
            };
        });
    }, [audioRef]);

    const contextvalue = {
        audioRef,
        seekBg,
        seekbar,
        track,
        setTrack,
        playstatus,
        setplaystatus,
        time,
        setTime,
        play,
        pause,
        PlaywithId,
        previous,
        next,seekSong 
    };

    return (
        <PlayerContext.Provider value={contextvalue}>
            {props.children}
        </PlayerContext.Provider>
    );
};

export default PlayerContextProvider;
