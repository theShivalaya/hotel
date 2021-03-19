import React from 'react'
import Star from "../../assests/icons/star.svg"
import "../../assests/css/homehelper.css"
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import First from "../../assests/imgs/home/first.jpg"
import UserIcon from "../../assests/icons/user.svg"
import HomeIcon from "../../assests/icons/home.svg"
import CallIcon from "../../assests/icons/call.svg"
import VisionIcon from "../../assests/icons/vision.svg"
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
function HomeHelper() {
    return (
        <div className="homehelper">
            <div className="homehelperNav">
                <div className="homehelperNavHome">Home</div>
                <div className="homehelperNavStars">
                    <img src={Star}/>
                    <img src={Star}/>
                    <img src={Star}/>
                    <img src={Star}/>
                    <img src={Star}/>
                </div>
                <div className="homehelperNavInnerDiv">
                    <div className="homehelperName">Shivalaya hotel</div>
                    <div className="homehelperRating">
                        <div className="homehelperRatingText">User Rattings</div>
                        <div className="homehelperRatingNumber">4.5/<span>5</span></div>
                    </div>
                </div>
            </div>
            <div className="homehelperGallery">
                <div className="homehelperSlider">
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        // deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        >
                        <div className="homehelperSliderOuter">
                            <div className="homehelperSliderInner"></div>
                        </div>        
                    </Carousel>
                </div>
                <div className="homehelpergallerySecond">
                    <div className="homehelperbooking">
                        <div className="homehelperbookingOuter">
                            <div className="homehelperbookingFirst">
                                <div className="homehelperbookingFirstText">price starts as</div>
                                <div className="homehelperbookingFirstPrice">Rs 3,500</div>
                                <div className="homehelperbookingFirstText">per room / night</div>
                                <div className="homehelperbookingFirstEnd">Quick Booking</div>
                            </div>
                            <div className="homehelperbookingSecond">
                                <div> <img src={UserIcon}/>2 x Guests</div>
                                <div> <img src={HomeIcon}/>1 x Room</div>
                                <div className="homehelperBookingNumber"> <img src={CallIcon}/>9289192921</div>
                            </div>
                        </div>
                        <div className="homehelperbookingButton" onClick={()=>{window.location.href="/hotel/#/rooms";window.scrollTo(0,0)}}>View Other Options</div>
                    </div>
                    <div className="homehelperMap">
                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe width="370" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=shivalaya%20resort%20nanital&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                                </iframe>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="homeMiddleBar">
                <div className="homeMiddleBarFirst"><a>Package Summary</a></div>
                <div className="homeMiddleBarSecond"><a onClick={()=>{
                    var obj = document.getElementById('Vision')
                    obj.scrollIntoView();
                }}>About</a></div>
                <div className="homeMiddleBarThird"><a href="/hotel/#/rooms">Rooms & Packages</a></div>
                <div className="homeMiddleBarFourth"><a href="/hotel/#/activities">Facilities & Activities</a></div>
                <div className="homeMiddleBarFifth"><a onClick={()=>{
                    var obj = document.getElementById('contactus')
                    obj.scrollIntoView();
                }}>Contact</a></div>
            </div>
            <div className="homeVision" id="Vision">
                <div className="homeVisionFirst">VISION</div>
                <div className="homeVisionSecond"><img src={VisionIcon}/></div>
                <div className="homeVisionFourth"><span>Away from the hustle & pollution of the fast paced world, come and experience the world of Purity, serenity and rejuvenation in the lap of Nature. "Shivalaya" is located in the most beautiful Himalayan state - Uttarakhand, known as the Place of Gods - Dev Bhoomi. Shivalaya is equidistant from the famous Lakes Nainital, Bhimtal, SatTaal, Garud Taal and Naukuchiyatal. Its richness in the nature is perfect for the souls seeking a quiet yet happening place to rejuvenate their body. Its lush green Valley vew natural surroundings is one of the best places for Scenic views, Bird watching, Trekking, Jungle Safari, Paragliding and many more adventure & yoga activities. Visitors can feed their Body with Rich SunShine (Tanning) and enjoy the in-house Heated Swimming Pool. Shivalaya is a work of ART with Super Luxury comfort and Facilities including Badminton/Cricket/Basketball court along with Table Tennis. Its restaurant serves all kind of food including its mouth-watering Mountain Cuisine (On Demand). Its setup and fast internet connection is designed to serve Work-from-Home professionals too. If long duration of silence of nature bothers a few, then Shivalaya also has a 1200 sq ft glass house Gazeebo with an in-built Home/Movie theatre, Party lovers can Rock with a Bon-fire after the Sunset. </span>
                    <span className="homeVisionFourthSpan">Life is beautiful, short and priceless... Shivalaya serves to make it an unforgettable experience...</span>
                </div>
            </div>

        </div>
    )
}

export default HomeHelper
