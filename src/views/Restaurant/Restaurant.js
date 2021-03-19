import React from 'react'
import Header from '../../components/Headers/Header'
import Footer from '../../components/Footer/Footer'
import UpperHeader from '../../components/Headers/UpperHeader'
import firstImg from "../../assests/imgs/gallery/IMG-20210130-WA0014.jpg"
import secondImg from "../../assests/imgs/gallery/IMG-20210130-WA0018.jpg"
import thirdImg from "../../assests/imgs/gallery/IMG-20210130-WA0017.jpg"
import fourthImg from "../../assests/imgs/gallery/IMG-20210130-WA0022.jpg"
import "../../assests/css/restaurant.css"
function Restaurant() {
    return (
        <div>
            <UpperHeader/>
            <Header active="Resturant"/>
            <div className="restaurant">
                <div className="firstrow">
                    <div className="photocontent">RESTAURANT</div>
                    <img src={firstImg}/>
                </div>
                <div className="secondrow">
                    <img src={secondImg}/>
                    <img src={thirdImg}/>
                    <img src={fourthImg}/>
                </div>
                <div className="thirdrow">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence
                </div>
            </div>
            
            <Footer/>
        </div>
    )
}

export default Restaurant
