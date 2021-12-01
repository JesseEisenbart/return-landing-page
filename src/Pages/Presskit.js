import NavFooter from "../components/NavFooter";
import banner from "../images/presskit-banner.png";
import screenshot_basecamp from "../images/screenshots/screenshot_basecamp.png";
import screenshot_cave from "../images/screenshots/screenshot_cave.png";
import screenshot_city from "../images/screenshots/screenshot_city.png";
import screenshot_forest_entrance from "../images/screenshots/screenshot_forest_entrance.png";
import screenshot_forest from "../images/screenshots/screenshot_forest.png";
import screenshot_gate from "../images/screenshots/screenshot_gate.png";
import screenshot_grasslands from "../images/screenshots/screenshot_grasslands.png";
import screenshot_radio from "../images/screenshots/screenshot_radio.png";
import screenshot_golem from "../images/screenshots/screenshot_golem.png";
import screenshot_den from "../images/screenshots/screenshot_den.png";
import screenshot_fort from "../images/screenshots/screenshot_fort.png";

import PresskitImages from "../components/PresskitImages";

import cover1 from "../images/cover/cover1.png";
import cover2 from "../images/cover/cover2.png";

import logo1 from "../images/cover/logo_brown.png";
import logo2 from "../images/cover/logo_transparent.png";

const Presskit = () => {
    return (
        <div className="main-container">
            <div className="main presskit">
                <div className="presskit-header">
                    <h2>WELCOME</h2>
                    <h1>RETURN PRESS KIT</h1>
                    <p>A post-apocalyptic adventure set in the rebirth of your home planet</p>
                </div>
                <div className="presskit-banner">
                    <img src={banner} alt="Return cover art"></img>
                </div>
                <div className="presskit-group">
                    <div className="presskit-facts">
                        <div className="title-with-line">
                            <h3>FACT SHEET</h3>
                            <div className="line"/>
                        </div>
                        <ul>
                            <li>
                                <b>Developer</b>
                            </li>
                            <li>
                                Dead Unicorn
                            </li>
                            <li>
                            Solo Developer based in Calgary, Alberta
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <b>Sound Designer & Composer</b>
                            </li>
                            <li>
                                Jabbu
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <b>Planned Platforms</b>
                            </li>
                            <li>
                                PC (Steam / GOG / EGS / itch.io)
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <b>Game Links</b>
                            </li>
                            <li>
                                <a href="https://deadunicorngames.itch.io/return" rel="noreferrer" target="_blank">Jam Version</a>
                            </li>
                            <li>
                                <a href="https://deadunicorngames.itch.io/return-pre-alpha/devlog" rel="noreferrer" target="_blank">Devlog</a>
                            </li>
                            <li>
                                <a href="https://deadunicorngames.itch.io/return-pre-alpha" rel="noreferrer" target="_blank">Pre-Alpha</a>
                            </li>
                        </ul>
                    </div>
                    <div className="presskit-description">
                        <div className="title-with-line">
                            <h3>DESCRIPTION</h3>
                            <div className="line"/>
                        </div>
                        <p>
                            Return is a 2d side-scroller that tells the story of <b>a traveler who finds themselves stranded on their unfamiliar home planet</b>. As the planet collapsed, the traveler left home 200 years ago, seeking refuge on the new colonies. To their dismay, they awake to find the autopilot on the ship returned home for repairs after encountering an error. Stranded in a home they no longer recognize, the traveler searches tirelessly for parts to repair their ship. 
                        </p>
                        <p>
                            The game was originally released as an entry into <b><a href="https://itch.io/jam/albertagamejam2020" rel="noreferrer" target="_blank">Alberta Game Jam 2020</a></b>, after surpassing 1500 downloads and 8300 views, it was determined the game deserved a full release. The development team consists of a a single self-taught, first-time commercial developer. 
                        </p>
                    </div>
                </div>
                <section className="presskit-section">
                    <div className="presskit-header">
                        <h2>2K</h2>
                        <h1>SCREENSHOTS</h1>
                    </div>
                    <PresskitImages />
                    {/* <div className="presskit-header">
                        <h2>2K</h2>
                        <h1>SCREENSHOTS</h1>
                    </div>
                    <div className="screenshot-row">   
                        <div className="screenshot">
                            <a href={screenshot_forest_entrance} rel="noreferrer" target="_blank">
                                <div className="screenshot-thumbnail" style={{"background-image": `url(${screenshot_forest_entrance})`}}/>
                            </a>    
                        </div>  
                        <div className="screenshot">
                            <a href={screenshot_basecamp} rel="noreferrer" target="_blank">
                                <div className="screenshot-thumbnail" style={{"background-image": `url(${screenshot_basecamp})`}}/>
                            </a>    
                        </div>   
                        <div className="screenshot">
                            <a href={screenshot_city} rel="noreferrer" target="_blank">
                                <div className="screenshot-thumbnail" style={{"background-image": `url(${screenshot_city})`}}/>
                            </a>    
                        </div>     
                    </div>
                    <div className="screenshot-row">   
                        <div className="screenshot">
                            <a href={screenshot_golem} rel="noreferrer" target="_blank">
                                <div className="screenshot-thumbnail" style={{"background-image": `url(${screenshot_golem})`}}/>
                            </a>    
                        </div>  
                        <div className="screenshot">
                            <a href={screenshot_den} rel="noreferrer" target="_blank">
                                <div className="screenshot-thumbnail" style={{"background-image": `url(${screenshot_den})`}}/>
                            </a>    
                        </div>   
                        <div className="screenshot">
                            <a href={screenshot_grasslands} rel="noreferrer" target="_blank">
                                <div className="screenshot-thumbnail" style={{"background-image": `url(${screenshot_grasslands})`}}/>
                            </a>    
                        </div>     
                    </div>
                    <div className="screenshot-row">   
                        <div className="screenshot">
                            <a href={screenshot_radio} rel="noreferrer" target="_blank">
                                <div className="screenshot-thumbnail" style={{"background-image": `url(${screenshot_radio})`}}/>
                            </a>    
                        </div>  
                        <div className="screenshot">
                            <a href={screenshot_gate} rel="noreferrer" target="_blank">
                                <div className="screenshot-thumbnail" style={{"background-image": `url(${screenshot_gate})`}}/>
                            </a>    
                        </div>   
                        <div className="screenshot">
                            <a href={screenshot_cave} rel="noreferrer" target="_blank">
                                <div className="screenshot-thumbnail" style={{"background-image": `url(${screenshot_cave})`}}/>
                            </a>    
                        </div>     
                    </div> */}

                    
                </section>
                <section className="presskit-section">
                    <div className="presskit-header">
                        <h2>4K</h2>
                        <h1>LOGO AND COVER ART</h1>
                    </div>
                    <div className="screenshot-row">   
                        <div className="screenshot">
                            <a href={cover1} rel="noreferrer" target="_blank">
                                <div className="screenshot-thumbnail" style={{"background-image": `url(${cover1})`}}/>
                            </a>    
                        </div>  
                        <div className="screenshot">
                            <a href={logo1} rel="noreferrer" target="_blank">
                                <div className="screenshot-thumbnail logo" style={{"background-image": `url(${logo1})`}}/>
                            </a>    
                        </div>   
                        <div className="screenshot">
                            <a href={logo2} rel="noreferrer" target="_blank">
                                <div className="screenshot-thumbnail logo transparent" style={{"background-image": `url(${logo2})`}}>
                                    <h3> (transparent) </h3>
                                </div>
                            </a>    
                        </div>     
                    </div>
                </section>
                <section className="presskit-section">
                    <div className="presskit-header">
                        <h2>SAY HELLO</h2>
                        <h1>GET IN TOUCH!</h1>
                    </div>
                    <div className="presskit-contact-container">
                        <ul className="presskit-contact">
                            <li>
                                <h4>Twitter</h4>
                                <a href={logo2} rel="noreferrer" target="_blank">twitter.com/DeadUnicornYYC</a>
                            </li>
                            <li>
                                <h4>Instagram</h4>
                                <a href={logo2} rel="noreferrer" target="_blank">instagram.com/DeadUnicornYYC</a>
                            </li>
                            <li>
                                <h4>E-mail</h4>
                                <a href={logo2} rel="noreferrer" target="_blank">deadunicorn.info@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>                
        </div>
    )
}

export default Presskit
