import React,{useEffect,useState} from 'react'
import RoomAdd from './RoomAdd';
import axios from 'axios';

function RoomBookFirstContainer({parentCallback,roomsBooked}) {
    const addbutton =()=>{
        parentCallback("roomsList");
    }
    const [rooms,setRooms]=useState([]);
    useEffect(() => {
        console.log(roomsBooked)
        var arr=[]
        for(const i in roomsBooked){
            arr.push(<RoomAdd key={roomsBooked[i].roomId}roomId = {roomsBooked[i].roomId} roomName={roomsBooked[i].roomDetails.roomType} adultsAllowed={roomsBooked[i].roomDetails.adultsAllowed}/> )
        }
        setRooms(arr);
    }, [roomsBooked])
    const proceedButton=(data)=>{
        parentCallback("roomBookstep2",data);
    }
    return (
             <div className="roomBookFirstContainer">
                <div className="roomBookDateOuter">
                    <div className="roomBookDateInner">
                        <div className="roomBookDateInnerFirst">From</div>
                        <div className="roomBookDateInnerSecond"><input type="Date" id="arriveDate"/></div>
                        <div className="roomBookDateInnerThird">To</div>
                        <div className="roomBookDateInnerFourth"><input type="Date" id="departDate"/></div>
                    </div>
                    <div className="roomAddition">
                        {rooms}
                    </div>
                    <div className="roomAddButton"><button onClick={addbutton}>+Add another Room</button></div>
                    <div className="roomProceed" onClick={async ()=>{
                        var arriveDate = document.getElementById('arriveDate').value;
                        var departDate = document.getElementById('departDate').value;
                        if(arriveDate=="" || departDate==""){
                            alert("Please Choose arrival and departure Date")
                        }else{
                        if(departDate<arriveDate){
                            alert("Departure cannot be before Arrival")
                        }else if(departDate==arriveDate){
                            alert("Check-Out Date cannot be same as Check-In Date")
                        }
                        else{
                            console.log(arriveDate,departDate)
                            var d1 = new Date(arriveDate);
                            var d2 = new Date(departDate);
                            const diffTime = Math.abs(d2 - d1);
                            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
                            console.log(roomsBooked)
                            var databseRequest = [];
                            var count1={
                                count:0,
                                adults:[],
                                roomType:"",
                                roomIds:[]
                            }
                            var count2={
                                    count:0,
                                    adults:[],
                                    roomType:"",
                                    roomIds:[]
                            }
                            var count3={
                                count:0,
                                adults:[],
                                roomType:"",
                                roomIds:[]
                            }
                            for(const i of roomsBooked){
                                if(i.roomId.includes("DERM")){
                                    count1.count++;
                                    count1.adults.push(document.getElementById(i.roomId).value);
                                    count1.roomType="DELUX ROOM";
                                    count1.roomIds.push({ids:i.roomId,adults:(document.getElementById(i.roomId).value)});
                                  }else if(i.roomId.includes("MIRM")){
                                    count2.count++;
                                    count2.adults.push(document.getElementById(i.roomId).value);
                                    count2.roomType="MINI SUITE";
                                    count2.roomIds.push({ids:i.roomId,adults:(document.getElementById(i.roomId).value)});
                                  }else{
                                    count3.count++;
                                    count3.adults.push(document.getElementById(i.roomId).value);
                                    count3.roomType="ROYAL SUITE";
                                    count3.roomIds.push({ids:i.roomId,adults:(document.getElementById(i.roomId).value)});
                                  }
                            }
                            if(count1.count>0){
                                var obj = {
                                    'roomType': count1.roomType,
                                    'arriveDate': arriveDate,
                                    'departDate': departDate,
                                    'roomsRequired': count1.count,
                                    'adults':count1.adults,
                                    'roomIds':count1.roomIds,
                                    'amount': 3500*count1.count*diffDays+''
                                  }
                                  databseRequest.push(obj);
                            }
                            if(count2.count>0){
                                var obj = {
                                    'roomType': count2.roomType,
                                    'arriveDate': arriveDate,
                                    'departDate': departDate,
                                    'roomsRequired': count2.count,
                                    'adults':count2.adults,
                                    'roomIds':count2.roomIds,
                                    'amount': 5000*count2.count*diffDays+''
                                  }
                                  databseRequest.push(obj);

                            }
                            if(count3.count>0){
                                var obj = {
                                    'roomType': count3.roomType,
                                    'arriveDate': arriveDate,
                                    'departDate': departDate,
                                    'roomsRequired': count3.count,
                                    'adults':count3.adults,
                                    'roomIds':count3.roomIds,
                                    'amount': 7500*count3.count*diffDays+''
                                }
                                  databseRequest.push(obj);
                            }
                        
                            console.log(databseRequest)
                            var flag1=1;
                            for(const i of databseRequest){
                                await axios.post('http://localhost:9759/api/room/testing',i)
                                .then((res)=>{
                                    // console.log(res.data)
                                        console.log(res.data);   
                                        if(res.data.available*1 === 1){
                                            flag1=flag1&1;
                                        }else{
                                            flag1=flag1&0;
                                        }              
                                })
                                .catch((err)=>{
                                    console.log(err)
                                })
                            }
                            console.log(flag1)
                            if(flag1==1){
                                proceedButton(databseRequest)
                            }else{
                                alert("This Room is currently not availble please select different Check-In Date and Check-Out Date")
                                document.getElementById('arriveDate').value="";
                                document.getElementById('departDate').value="";

                            }
                         }
                        }
                        }}>Proceed</div>
                </div>
                <div className="roomBookContact">Please contact the hotel for accomodation of more adults in one room. Entry to childrens below the age of 5 is Free. </div>
            </div>

    )
}

export default RoomBookFirstContainer
