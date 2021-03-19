import React,{useEffect} from 'react'
import "../../assests/css/roombookfirst.css"

import RoomBookFirstContainer from './RoomBookFirstContainer'
import RoomBookSecondContainer from './RoomBookSecondContainer'

function RoombookFirst() {   
       
    return (
        <div className="roombookFirst">
            <div className="roomBookFirstNav">
                <div>Step 1: Date selection</div>
                <div className="dot-line"></div>
                <div>Step 2: Guest information</div>
                <div className="dot-line"></div>
                <div>Step 3: Payment</div>
            </div>
            <RoomBookFirstContainer/>
            {/* <RoomBookSecondContainer/> */}
        </div>
    )
}

export default RoombookFirst
