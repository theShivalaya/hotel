import React from 'react'
import Star from "../../assests/icons/star.svg"
import "../../assests/css/personreview.css"
function PersonReview() {
    return (
        <div className="reviewCard">
            <div className="cardPhoto"></div>
            <div className= "LowerContainer">
                <div className="reviewName">Megan Fox</div>
                <div className="reviewDate">Stayed 18 Nov, 2019</div>
                <div className="reviewStars">
                    <img src={Star}/>
                    <img src={Star}/>
                    <img src={Star}/>
                    <img src={Star}/>
                    <img src={Star}/>
                </div>
                <div className="reviewText">
                It was very nice hotel with cleanliness. Staff behavior was good and polite. They welcome us very well. Issue was only that Lift was not in working and we were allotted to 3rd floor and amenities articles were in corner of gallery which were giving bad feeling. Breakfast was good and support of the staff was also very nice. Location is not good as per atmosphere, it is very nearby most of the popular places but self location in a narrow street is not good. Overall it was a good experience and could recommend. 
                </div>
            </div>
        </div>
    )
}

export default PersonReview
