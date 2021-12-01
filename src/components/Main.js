import Images from './Images'
import NavFooter from "./NavFooter";
import Action from './Action';
import Footer from './Footer';
import Description from './Description';
import Video from './Video';

const Main = () => {
    return (
        <div className="main-container">
            <div className="main">
                <Action text="WISHLIST RETURN ON STEAM!" icon="fab fa-steam" link="https://deadunicorngames.itch.io/return-pre-alpha/devlog" wishlist={true}/>
                <Video />
                <Description />
                <Action text="JOIN THE MAILING LIST!" icon="far fa-envelope" link="https://discord.gg/3e7hWqUJva"/>
                <Images/>                 
                <Action text="JOIN OUR DISCORD AND CONNECT WITH THE DEVELOPERS!" icon="fab fa-discord" link="https://discord.gg/3e7hWqUJva"/>
            </div>
        </div>
    )
}

export default Main
