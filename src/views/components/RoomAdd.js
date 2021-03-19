import React, { useState,useEffect } from 'react'
import "../../assests/css/roomadd.css"
function RoomAdd({roomId,roomName,adultsAllowed}) {
    var [roomN,setRoomName]=useState("room");
    var [maxAdult,setMaxAdult]=useState(2);
    useEffect(() => {
        setRoomName(roomName)
        setMaxAdult(adultsAllowed)
    }, [roomId,roomName,adultsAllowed])
    return (
        <div  className="roomArrange">
                        <div className="roomBookDateInnerFirstNew">{roomN}</div>
                        <div className="roomAdult">
                            <div className="roomAdultHead">Adults (1-{maxAdult}) </div>
                            <div>
                            <div className="value-button" id="decrease1" onClick={()=>{var value = parseInt(document.getElementById(roomId).value, 10);value = isNaN(value) ? 0 : value;if(value<=1) value=1;   else value--; document.getElementById(roomId).value = value;}} value="Decrease Value">-</div>
                            <input type="number" className="inputNumber"id= {roomId} defaultValue="1"/>
                            <div className="value-button" id="increase1" onClick={()=>{ console.log(document.getElementById(roomId)); var value = parseInt(document.getElementById(roomId).value, 10);value = isNaN(value) ? 0 : value; if(value>=maxAdult)value=maxAdult;else {value++;}document.getElementById(roomId).value = value; console.log(maxAdult)}} value="Increase Value">+</div>
                            </div>
                        </div>
                        {/* <div className="roomChild">
                            <div className="roomChildHead">Childrens(0-5) </div>
                            <div>
                            <div className="value-button" id="decrease" onClick={()=>{var value = parseInt(document.getElementById('number1').value, 10);value = isNaN(value) ? 0 : value;if(value<=0) value=0;   else value--; document.getElementById('number1').value = value;}} value="Decrease Value">-</div>
                            <input type="number" className="inputNumber" id="number1" defaultValue="0"/>
                            <div className="value-button" id="increase" onClick={()=>{ console.log(document.getElementById('number1')); var value = parseInt(document.getElementById('number1').value, 10);value = isNaN(value) ? 0 : value;if(value>=5)value=5;else {value++;}document.getElementById('number1').value = value;}} value="Increase Value">+</div>
                            </div>
                        </div> */}
        </div>
    )
}

export default RoomAdd
