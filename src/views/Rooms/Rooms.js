import React, { useEffect} from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Headers/Header'
import UpperHeader from '../../components/Headers/UpperHeader'
import Roomlayout from '../components/Roomlayout'
import "../../assests/css/rooms.css"
import axios from 'axios';
import {useState} from 'react'
import RoombookFirst from '../components/RoombookFirst'
import RoomBookFirstContainer from '../components/RoomBookFirstContainer'
import RoomBookSecondContainer from '../components/RoomBookSecondContainer'
import CircleIcon from "../../assests/icons/circle-check.svg"
function Rooms() {
    const [flag,setFlag]=useState("false")
    const [roomsSelected,setRoomSelected]=useState([]);
    const [componentRender,setComponentRender]=useState("roomsList");
    const [preBookData,setPreBookData]=useState([]);
    var obj={
        roomType:"dummy",
        roomArea:"100",
        roomPrice:"9999",
        roomDescription:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't",
        adultsAllowed:"0"
    }
    var [items,setItems]=useState([]);
    const headers={
        headers:{
        'Content-Type': 'application/json'
        }
      }
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          axios.get('http://localhost:9759/api/room/allrooms',headers)
          .then((res)=>{
            var arr=[];
            // console.log(res.data)
            for(const i in res.data){
                // console.log(res.data[i])
                arr[i]=res.data[i];
            }
            setItems(arr)
            console.log(arr)
            console.log(items)
          })
          .catch((err)=>{
            console.log(err)
          })
        //   fetch("http://localhost:9759/api/room/allrooms", requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));
    }, [flag])
    const callback = (roomId,roomDetails)=>{
      console.log(roomDetails,roomId)
      
      var arr=roomsSelected;
      var deluxMax = 5;//DERM
      var royalMax=2;//MIRM
      var miniMax=3;//RSRM
      var count1=0,count2=0,count3=0;
      console.log(arr.length)
      for(var i=0;i<arr.length;i++){
        if(arr[i].roomId.includes("DERM")){
          count1++;
        }else if(arr[i].roomId.includes("MIRM")){
          count2++;
        }else{
          count3++
        }
      }
      if(roomId.includes("DERM")){
        if(count1<=4){
          arr.push({roomDetails,roomId});
        }else{
          alert("We Only Have Maximum Of 5 DELUX ROOMS")
        }
      }else if(roomId.includes("MIRM")){
        if(count2<=2){
          arr.push({roomDetails,roomId});
        }else{
          alert("We Only Have Maximum Of 3 MINI SUITE ROOMS")
        }
      }else{
        if(count3<=1){
          arr.push({roomDetails,roomId});
        }else{
          alert("We Only Have Maximum Of 2 ROYAL SUITE ROOMS")
        }
      }
      setRoomSelected(arr);
      setComponentRender("roomBookstep1")
      console.log(roomsSelected)
    }
    const callback2 = (string,data={})=>{
      setComponentRender(string)
      console.log(data)
      if(data!={}){
        setPreBookData(data)
      }
    }
    const callback3 = ()=>{
      
    }
    
    if(componentRender=="roomsList"){
    return (
        <div>
            <UpperHeader/>
            <Header active="Rooms"/>
            <div className="roomsBegin">
            {items.map(i=>(
             <Roomlayout key={i.roomIds} details={i} parentCallback={callback}/> 
             ))} 
            </div>
            <Footer/>
        </div>
    )
    }else if(componentRender=="roomBookstep1"){
      return(
        <div>
          <UpperHeader/>
          <Header active="Rooms"/>
          <div className="roomBookMain">
            <div className="roombookFirst">
              <div className="roomBookFirstNav">
                  <div>Step 1: Date selection</div>
                  <div className="dot-line"></div>
                  <div>Step 2: Guest information</div>
                  <div className="dot-line"></div>
                  <div>Step 3: Payment</div>
              </div>
              <RoomBookFirstContainer parentCallback={callback2} roomsBooked={roomsSelected}/>
              {/* <RoomBookSecondContainer/> */}
            </div>
          </div>
          <Footer/>
        </div>
      )
    }else if(componentRender=="roomBookstep2"){
      return(
        <div>
          <UpperHeader/>
          <Header active="Rooms"/>
          <div className="roomBookMain">
            <div className="roombookFirst">
              <div className="roomBookFirstNav">
                  <div className="circletick"><img src={CircleIcon}/>  Step 1: Date selection</div>
                  <div className="dot-line"></div>
                  <div>Step 2: Guest information</div>
                  <div className="dot-line"></div>
                  <div>Step 3: Payment</div>
              </div>
              {/* <RoomBookFirstContainer/> */}
              <RoomBookSecondContainer parentCallback={callback3} preData={preBookData}/>
            </div>
          </div>
          <Footer/>
        </div>
      )
    }
}

export default Rooms;
