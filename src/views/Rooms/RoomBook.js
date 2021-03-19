import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Headers/Header'
import UpperHeader from '../../components/Headers/UpperHeader'
import RoombookFirst from '../components/RoombookFirst'
import "../../assests/css/roombook.css"
function RoomBook() {
    return (
        <div>
            <UpperHeader/>
            <Header/>
            <div className="roomBookMain">
            <RoombookFirst/>
            </div>
            <Footer/>
        </div>
    )
}

export default RoomBook
