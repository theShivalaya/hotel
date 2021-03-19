import React from 'react'
import "../../assests/css/otheractivities.css"
function Otheractivities() {
    return (
        <div className="otheractivities">
           <div className="othcontainer">
                <div className="othacthead">OTHER Activites</div>
                <div className="photogallery">
                    <div className="firstp">
                        <div className="innerfirstp">
                            <span>Night party place</span>
                            <button className="othbtn" onClick={()=>{window.scrollTo(0,0);window.location.href="/hotel/#/rooms"}}>Book Now</button>
                        </div>
                    </div>
                    <div className="secondp">
                        <div className="innersecondp">
                            <span>Bon Fire</span>
                            <button className="othbtn" onClick={()=>{ window.scrollTo(0,0);window.location.href="/hotel/#/rooms"}}>Book Now</button>
                        </div>
                    </div>
                    <div className="thirdp">
                        <div className="innerthirdp">
                            <span>Local trips</span>
                            <button className="othbtn" onClick={()=>{window.scrollTo(0,0);window.location.href="/hotel/#/rooms"}}>Book Now</button>
                        </div>
                    </div>
                    <div className="fourthp">
                        <div className="innerfourthp">
                            <span>Valley view</span>
                            <button className="othbtn" onClick={()=>{window.scrollTo(0,0);window.location.href="/hotel/#/rooms"}}>Book Now</button>
                        </div>
                    </div>
                </div>

           </div>
        </div>
    )
}

export default Otheractivities
