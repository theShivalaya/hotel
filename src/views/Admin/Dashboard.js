import axios from 'axios';
import React, { useState,useEffect } from 'react'
import AdminHeader from '../../components/Headers/AdminHeader'
import UpperHeader from '../../components/Headers/UpperHeader'
import "../../assests/css/dashboard.css"
import bcrypt from 'bcryptjs'
function Dashboard() {
    const [component,setComponent]=useState("Bookings");
    const [activeBar,setActiveBar]=useState("Bookings");
    const [latestBookings,setLatestBookings]=useState([]);
    const [pastBookings,setPastBookings]=useState([]);

    const callback = (str)=>{
        console.log(str)
        setComponent(str)
        setActiveBar(str)
    }
    const [flag,setFlag]=useState(false)
    Date.prototype.yyyymmdd = function() {
        var mm = this.getMonth() + 1; // getMonth() is zero-based
        var dd = this.getDate();
      
        return [this.getFullYear(),
                (mm>9 ? '' : '0') + mm,
                (dd>9 ? '' : '0') + dd
                ].join('-');
    };
    useEffect(() => {
        const date = new Date()
        console.log(date.yyyymmdd())
        var data={
            'date':date.yyyymmdd()
        }
        var email = window.localStorage.getItem('email')
        if(email!=null){
        axios.post('http://localhost:9759/api/admin/latest-bookings',data)
        .then((res)=>{
            var arr=[]
            if(res.data.status==1){
                for(const i of res.data.result){
                    var d1 = new Date(i.arrival);
                    var d2 = new Date(i.departure);
                    const diffTime = Math.abs(d2 - d1);
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    var rooms = [] 
                    for(const j in i.roomsList){
                        rooms.push(i.roomsList[j] + " : "+i.roomsQnty[j]);
                    }
                    var r = "[ "+rooms.join(', ')+ " ]"
                    console.log(i)
                    arr.push(
                        <div className="booking">
                    <   div className="booking1">
                        <div className="bookingName">Name : <span className="bBold">{i.name}</span></div>
                        <div>Email  : <span className="bBold">{i.email}</span></div>
                        <div>Mobile : <span className="bBold">{i.phonenumber}</span></div>
                        <div classNamae="GuestList">Guest List : <span className="bBold">{i.guestLists.join(', ')}</span></div>
                        <div>Paid Amount: <span className="bBold">₹{i.billAmount}</span></div>
                        <div>Bill Date: <span className="bBold">{i.billDate}</span></div>
                    </div>
                    <div className="booking2">
                        <div className="bookingRefernce">
                            <div className="bookingRefernceHead">Booking refernce Number</div>
                            <div className="bookingId">{i.bookingId}</div>
                        </div>
                        <div>Check-In Date  &nbsp;&nbsp;&nbsp;: <span className="bBold">{i.arrival}</span></div>
                        <div>Check-Out Date : <span className="bBold">{i.departure}</span></div>
                        <div>Nights : <span className="bBold">{diffDays}</span></div>
                        <div>Rooms: <span className="bBold">{r}</span></div>
                    </div>
                </div>
                    )
                }
                setLatestBookings(arr);
            }
        })
        axios.post('http://localhost:9759/api/admin/past-bookings',data)
        .then((res)=>{
            var arr=[]
            if(res.data.status==1){
                for(const i of res.data.result){
                    var d1 = new Date(i.arrival);
                    var d2 = new Date(i.departure);
                    const diffTime = Math.abs(d2 - d1);
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    var rooms = [] 
                    for(const j in i.roomsList){
                        rooms.push(i.roomsList[j] + " : "+i.roomsQnty[j]);
                    }
                    var r = "[ "+rooms.join(', ')+ " ]"
                    console.log(i)
                    arr.push(
                        <div className="booking">
                    <   div className="booking1">
                        <div className="bookingName">Name : <span className="bBold">{i.name}</span></div>
                        <div>Email  : <span className="bBold">{i.email}</span></div>
                        <div>Mobile : <span className="bBold">{i.phonenumber}</span></div>
                        <div classNamae="GuestList">Guest List : <span className="bBold">{i.guestLists.join(', ')}</span></div>
                        <div>Paid Amount: <span className="bBold">₹{i.billAmount}</span></div>
                        <div>Bill Date: <span className="bBold">{i.billDate}</span></div>
                    </div>
                    <div className="booking2">
                        <div className="bookingRefernce">
                            <div className="bookingRefernceHead">Booking refernce Number</div>
                            <div className="bookingId">{i.bookingId}</div>
                        </div>
                        <div>Check-In Date  &nbsp;&nbsp;&nbsp;: <span className="bBold">{i.arrival}</span></div>
                        <div>Check-Out Date : <span className="bBold">{i.departure}</span></div>
                        <div>Nights : <span className="bBold">{diffDays}</span></div>
                        <div>Rooms: <span className="bBold">{r}</span></div>
                    </div>
                </div>
                    )
                }
                setPastBookings(arr);
            }
        })
        
        }
    }, [flag])
    function ValidateEmail(mail) {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)){
          return (true)
        }
          return (false)
        }
    const handleAddUser = ()=>{
        var email = document.getElementById('addUserEmail').value
        var password = document.getElementById('addUserPass').value
        if(ValidateEmail(email)){
            const data={
                email:email,
                password:password
            }
            axios.post("http://localhost:9759/api/admin/createuser",data)
            .then((flag)=>{
                console.log(flag)
                if(flag.status){
                    alert("A new User Has Been Successfully Added");
                    email=""
                    password=""
                }else{
                    alert("There was an error while creating new user");
                }
            })
            .catch((err)=>{
                console.log(err)
                alert("There was an error while creating new user");
            })
        }else{
            alert("Please Enter Valid Email")
        }
    }
    const handleChangePass = ()=>{
        var oldPassword = document.getElementById('changePassOld').value
        var newPassword = document.getElementById('changePassNew').value
            const data={
                oldPassword:oldPassword,
                newPassword:newPassword,
                email:window.localStorage.getItem('email')
            }
            axios.post("http://localhost:9759/api/admin/changepass",data)
            .then((flag)=>{
                console.log(flag)
                if(flag.status){
                    alert("Password Changed Successfully");
                    bcrypt.hash(newPassword,12)
                    .then((hasPass)=>{
                        console.log(hasPass)
                        window.localStorage.setItem('login',hasPass)
                        document.getElementById('changePassOld').value="";
                        document.getElementById('changePassNew').value="";
                    })
                    
                }else{
                    alert("There was an error while Changing the Password");
                }
            })
            .catch((err)=>{
                console.log(err)
                alert("There was an error while Changing the Password");
            })
    }
    var email = window.localStorage.getItem('email')
    if(email!=null){
    if(component=="Bookings"){
        return (
            <div className="outerB">
            <UpperHeader/>
            <AdminHeader parentCallback={callback} active={activeBar}/>
            <div className="bookingConatiner">
                {latestBookings}
            </div> 
            </div>
        )
    }
    if(component=="pastBookings"){
        return (
            <div>
            <UpperHeader/>
            <AdminHeader parentCallback={callback} active={activeBar}/>
            <div className="bookingConatiner">
                {pastBookings}
            </div> 
            </div>
        )
    }
    if(component=="addUser"){
        return (
            <div>
            <UpperHeader/>
            <AdminHeader parentCallback={callback} active={activeBar}/>
            <div className="addUser">
                <div className="addUserConatiner">
                    <div className="addUserConatiner1">
                    <div>Email:</div>
                    <input type="email" id="addUserEmail" className="form-control1" placeholder="Enter email" />
                    </div>
                    <div className="addUserConatiner2">
                        <div>Password:</div>
                        <input type="password" id="addUserPass"className="form-control1" placeholder="Enter password" />
                    </div>
                    <div><button className="addUserBtn" onClick={handleAddUser}>Add</button></div>
                </div>
            </div>
            </div>
        )
    }
    if(component=="changePass"){
        return (
            <div>
            <UpperHeader/>
            <AdminHeader parentCallback={callback} active={activeBar}/>
            <div className="changePass">
                <div className="changePassConatiner">
                    <div className="changePassConatiner1">
                    <div>Old Password:</div>
                    <input type="password" id="changePassOld" className="form-control1" placeholder="Enter Old Password" />
                    </div>
                    <div className="addUserConatiner2">
                        <div>New Password:</div>
                        <input type="password" id="changePassNew"className="form-control1" placeholder="Enter New password" />
                    </div>
                    <div><button className="addUserBtn" onClick={handleChangePass}>Change</button></div>
                </div>
            </div>
            </div>
        )
    }
}else{
    window.location.href = "/hotel/#/log-admin"
    return (
        <div></div>
    )
}
}

export default Dashboard
