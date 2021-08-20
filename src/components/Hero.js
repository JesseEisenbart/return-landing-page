import { useState, useEffect } from "react";
import background1 from "../HeroImages/background1.png";
import background2 from "../HeroImages/background2.png";
import background3 from "../HeroImages/background3.png";
import background4 from "../HeroImages/background4.png";
import background5 from "../HeroImages/background5.png";
import background6 from "../HeroImages/background6.png";
import background7 from "../HeroImages/background7.png";
import text from "../HeroImages/text.png";

const Hero = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
      function onScroll() {
        let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
        console.log(currentPosition);

        setScrollPosition(currentPosition);

      }
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (     
        <div className="parallax-container">
            <div 
                style ={ 
                    { 
                        backgroundColor: `#291d2b`, 
                    } 
                }
            />
            <div 
                style ={ 
                    { 
                        backgroundImage: `url(${background7})`, 
                        transform: `translate(0px, -${scrollPosition * 1/8}px)` 
                    } 
                }
            />
            <div 
                style ={ 
                    { 
                        backgroundImage: `url(${background6})`, 
                        transform: `translate(0px, -${scrollPosition * 2/8}px)` 
                    } 
                }
            />
            <div 
                style ={ 
                    { 
                        backgroundImage: `url(${background5})`, 
                        transform: `translate(0px, -${scrollPosition* 3/8}px)` 
                    } 
                }
            />
            <div 
                style ={ 
                    { 
                        backgroundImage: `url(${background4})`, 
                        transform: `translate(0px, -${scrollPosition* 4/8}px)` 
                    } 
                }
            />
            <div 
                style ={ 
                    { 
                        backgroundImage: `url(${text})`, 
                        transform: `translate(0px, -${scrollPosition* 5/8}px)` 
                    } 
                }
            />
            <div 
                style ={ 
                    { 
                        backgroundImage: `url(${background3})`, 
                        transform: `translate(0px, -${scrollPosition* 6/8}px)` 
                    } 
                }
            />
            <div 
                style ={ 
                    { 
                        backgroundImage: `url(${background2})`, 
                        transform: `translate(0px, -${scrollPosition* 7/8}px)` 
                    } 
                }
            />
            <div 
                style ={ 
                    { 
                        backgroundImage: `url(${background1})`, 
                        transform: `translate(0px, -${scrollPosition * 8/8}px)` 
                    } 
                }
            />
        </div>
    )
}

export default Hero
