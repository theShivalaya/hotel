import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Headers/Header'
import UpperHeader from '../../components/Headers/UpperHeader'
import "../../assests/css/gallery.css"
import firstImg from "../../assests/imgs/gallery/IMG-20210130-WA0014.jpg"
import secondImg from "../../assests/imgs/gallery/IMG-20210130-WA0018.jpg"
import thirdImg from "../../assests/imgs/gallery/IMG-20210130-WA0017.jpg"
import fourthImg from "../../assests/imgs/gallery/IMG-20210130-WA0022.jpg"
import fifthImg from "../../assests/imgs/gallery/IMG-20210130-WA0021.jpg"
import sixthImg from "../../assests/imgs/gallery/IMG-20210130-WA0027.jpg"
import seventhImg from "../../assests/imgs/gallery/IMG-20210130-WA0013.jpg"
import eightImg from "../../assests/imgs/gallery/IMG-20210130-WA0015.jpg"
import ninthImg from "../../assests/imgs/gallery/IMG-20210130-WA0023.jpg"
import tenthImg from "../../assests/imgs/gallery/IMG-20210130-WA0016.jpg"
import styled, { keyframes } from 'styled-components';
import { bounce,rollIn} from 'react-animations';
const bounceAnimation = keyframes`${bounce}`;

const BouncyDiv = styled.div`
  animation: 2s ${bounceAnimation};
`;

function Gallery() {
    return (
        <div>
            <UpperHeader/>
            <Header active="Gallery"/>
            <div className="gallery">
                <BouncyDiv><div className="gfirstrow">
                    <div className="photocontent"><span>PHOTO</span><span className="red">GALLERY</span></div>
                    <img src={firstImg}/>
                </div>
                </BouncyDiv>
                <BouncyDiv>
                    <div className="gsecondrow">
                        <img src={secondImg}/>
                        <img src={thirdImg}/>
                        <img src={fourthImg}/>
                    </div>
                </BouncyDiv>
                <BouncyDiv>
                <div className="gthirdrow">
                    <img src={fifthImg}/>
                    <img src={sixthImg}/>
                    <img src={seventhImg}/>
                </div>
                </BouncyDiv>
                <BouncyDiv>
                <div className="gfourthrow">
                    <img src={eightImg}/>
                    <img src={ninthImg}/>
                    <img src={tenthImg}/>
                </div>
                </BouncyDiv>
            </div>
            
            

            <Footer/>
        </div>
    )
}

export default Gallery
