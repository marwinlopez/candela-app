import React, { useState, useEffect } from "react";
import { FaPlayCircle, FaInstagram, FaPauseCircle } from "react-icons/fa";
import "./Footer.css";

const useAudio = audio => {
    const [playing, setPlaying] = useState(false);
    
    const toggle = () => (setPlaying(!playing));

    useEffect(() => {
        console.log(playing)
        if (playing)
            audio.play()
        else audio.pause();
    },
        [playing]
    );

    // useEffect(() => {
    //     audio.addEventListener('ended', () => setPlaying(!playing));
    //     return () => {
    //         audio.removeEventListener('ended', () => setPlaying(!playing));
    //     };
    // }, []);

    return [playing, toggle];
};

const Footer = ({ audio, isRun }) => {
    const [playing, toggle] = useAudio(audio);
    const [sound, setSound] = useState(false)

    useEffect(() => {
        if(isRun && !sound){
            setSound(sound => true)
            console.log("cambio estatus")
            //toggle();
            // setSound(!sound)
        }
    },)

    return (
        // <div className={playing ? "footer-fixed" : "footer"}>
        //     <button className={playing ? "btn-fixed" : "btn"} onClick={toggle}>
        //         {playing ? (
        //             <FaPauseCircle className={playing ? "play-fixed" : "play"} />
        //         ) : (
        //             <FaPlayCircle className={playing ? "play-fixed" : "play"} />
        //         )}
        //     </button>
        // </div>
        <div className="footer" >
            <button className="btn" onClick={toggle}>
                {playing ? (
                    <FaPauseCircle className= "play" />
                ) : (
                    <FaPlayCircle className= "play" />
                )}
            </button>
        </div>
    );
};

export default Footer;
