import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Headers/Header'
import UpperHeader from '../../components/Headers/UpperHeader'
import "../../assests/css/activities.css"
import ActivitiesHelper from '../components/ActivitiesHelper'
import Otheractivities from '../components/Otheractivities'
function Activities() {
    return (
        <div>
            <UpperHeader/>
            <Header active="Activities"/>
            <div className="activitiesMain">
            <ActivitiesHelper />
            <Otheractivities/>
            </div>
            <Footer/>
        </div>
    )
}

export default Activities
