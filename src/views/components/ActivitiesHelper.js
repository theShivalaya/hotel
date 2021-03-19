import React from 'react'
import "../../assests/css/activitieshelper.css"
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function ActivitiesHelper() {
    return (
        <div className="activities">
        <div className="innerdiv">
            <div className="heading">Activites & Ammenities</div>
            <div className="container">
                <div className="firstcol">
                    <div className="acthead red">Land Based Activities</div>
                    <div><CheckCircleIcon className="actIcon"/>Gym</div>
                    <div><CheckCircleIcon className="actIcon"/>Badminton court</div>
                    <div><CheckCircleIcon className="actIcon"/>Table tennis</div>
                    <div><CheckCircleIcon className="actIcon"/>Soccer balls</div>
                    <div><CheckCircleIcon className="actIcon"/>Yoga</div>
                    <div><CheckCircleIcon className="actIcon"/>Multi Gym</div>
                    <div><CheckCircleIcon className="actIcon"/>Shooting</div>
                    <div><CheckCircleIcon className="actIcon"/>Valley view</div>
                    <div><CheckCircleIcon className="actIcon"/>Bon-Fire</div>
                    <div><CheckCircleIcon className="actIcon"/>Massager chair</div>
                    <div><CheckCircleIcon className="actIcon"/>Adventure Camping</div>
                    <div><CheckCircleIcon className="actIcon"/>Local trips</div>
                </div>
                <div className="secondcol">
                <div className="acthead red">Purchase Inclusions</div>
                    <div><CheckCircleIcon className="actIcon"/>Room as per selection</div>
                    <div><CheckCircleIcon className="actIcon"/>24 x 7 Reception</div>
                    <div><CheckCircleIcon className="actIcon"/>Hot water facility</div>
                    <div><CheckCircleIcon className="actIcon"/>Locker facility</div>
                    <div><CheckCircleIcon className="actIcon"/>Free Wi-Fi</div>
                    <div><CheckCircleIcon className="actIcon"/>Free Secure Parking  </div>
                    <div className="acthead red">Entertainment</div>
                    <div><CheckCircleIcon className="actIcon"/>Live music</div>
                    <div><CheckCircleIcon className="actIcon"/>Gazebo for night party</div>
                </div>
                <div className="thirdcol">
                    <div className="acthead red">Meal Plan Available</div>
                    <div><CheckCircleIcon className="actIcon"/>Traditional</div>
                    <div><CheckCircleIcon className="actIcon"/>Indian</div>
                    <div><CheckCircleIcon className="actIcon"/>Chinese</div>
                    <div className="acthead red">Check In & Check Out</div>
                    <div><CheckCircleIcon className="actIcon"/>Check In Time 14:00</div>
                    <div><CheckCircleIcon className="actIcon"/>Check Out Time 11:00</div>
                </div>

            </div>
        </div>
    </div>
    
    )
}

export default ActivitiesHelper
