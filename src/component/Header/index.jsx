import React, { useState, useEffect } from "react";
import "./Header.css";
import logo200 from "../img/logo_zvhned_c_scale,w_200.png";
import logo310 from "../img/logo_zvhned_c_scale,w_310.png";
import logo415 from "../img/logo_zvhned_c_scale,w_801.png";
import logo1050 from "../img/logo_zvhned_c_scale,w_1050.png";

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

const Header = () => {

    const [logo, setLogo] = useState(logo1050)
    const size = useWindowSize();

    useEffect(() => {
        console.log(size.width<359.99,window.innerWidth)
        if(size.width<359.99){
            setLogo(logo200);
        }else if(size.width > 360 && size.width < 725){
            setLogo(logo200);
        }else if(size.width>724.99 && size.width<1024){
            setLogo(logo200);
        }else if(size.width>1204){
            setLogo(logo200);
        }
    }, [setLogo])

    return (
        <header className="header-area">
            <div className="navbar-area">
                <div className="container">
                    <nav className="site-navbar">
                        <img
                            className = "logo logo-mobil"
                            src={logo}
                            alt=""
                        />
                        {/* <ul>
                            <li>
                                <p style={{color:"#FFFFFF"}}>{size.width}px / {size.height}px {logo}</p>
                            </li>
                        </ul> */}
                    </nav>
                </div>
            </div>
        </header>
        // <div className = "nav-wrapper">
        //     <div className="grad-bar"></div>
        //     <nav className = "navbar">
        //     <img className = "logo logo-mobil" src={logo} alt = "Candela 979" />
        //     </nav>

        // </div>
    );
};

export default Header;
