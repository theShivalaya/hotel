import React from 'react'
import "../../assests/css/review.css"
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import PersonReview from './PersonReview';

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
function Review() {
    return (
        <div className="hreview">
            <div className="hreviewinfo">What people thinks about us</div>
            <div>
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
            removeArrowOnDeviceType={["tablet"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            >
            <div><PersonReview/></div>
            <div><PersonReview/></div>
            <div><PersonReview/></div>
            <div><PersonReview/></div>
            </Carousel>
            </div>
        </div>
    )
}

export default Review
