import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Headers/Header'
import UpperHeader from '../../components/Headers/UpperHeader'
import ActivitiesHelper from '../components/ActivitiesHelper'
import Otheractivities from '../components/Otheractivities'
import Review from '../components/Review'
import "../../assests/css/home.css"
import HomeHelper from '../components/HomeHelper'
function Homepage() {
    return (
        <div>
            <UpperHeader/>
            <Header active="Home"/>
            <div className="homeMain"><HomeHelper/></div>
            <div className="homereview"><Review/></div>
            <div className="homeactivities"><ActivitiesHelper/></div>
            <div className="homeotheractivities"><Otheractivities/></div>
            <div className="homeFooter"><Footer/></div>
        </div>
    )
}

export default Homepage
