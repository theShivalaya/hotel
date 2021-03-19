import { Button, List, ListItem, TextField } from '@material-ui/core'
import { list } from 'postcss'
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import React from 'react'
import "../../assests/css/footer.css"
function Footer() {
    return (
        <footer className="footer" id="contactus">
            <div className="logo">
            <div className="upper">
                <div className="content1">SHIVALAYA</div>
                <div className="content2">
                    <div className="listHead">All Categories</div>
                    <a href="/hotel/#/" onClick={()=>window.scrollTo(0,0)} className="listItem listItem1">Home</a>
                    <a href="/hotel/#/rooms" onClick={()=>window.scrollTo(0,0)} className="listItem">Rooms</a>
                    <a href="/hotel/#/activities"onClick={()=>window.scrollTo(0,0)}  className="listItem">Activities</a>
                    <a href="/hotel/#/restaurant" onClick={()=>window.scrollTo(0,0)} className="listItem">Resturant</a>
                    <a href="/hotel/#/gallery"onClick={()=>window.scrollTo(0,0)}  className="listItem">Gallery</a>
                    <a onClick ={()=>{
                        var elmnt = document.getElementById("contactus");
                        elmnt.scrollIntoView();
                    }} className="listItem">Contact Us</a>
                </div>
            </div>
            <div className="lower">
                <div className="basic lhead">Contact Details</div>
                <div className="basic lcontent">Feel free to contact us by phone, email or by our contact form</div>
                <div className="basic"><RoomIcon  className="fIcon"/><span className="ftext">Nanital</span></div>
                <div className="basic"><PhoneIcon className="fIcon"/></div>
                <div className="basic"><EmailIcon className="fIcon"/>karan@gmail.com</div>

            </div>
            </div>
            <div className="contact">
                <div className="conText">SEND US A MESSAGE</div>
                <form action="mailto:karan@example.com?subject=Query realted to website" method="POST" data-rel="external" enctype="text/plain"role="form">
                <div className="outerdiv">
                <div><input type="text" name="Name"className="input" id="outlined-basic" placeholder="Your Full Name"/></div>
                <div><input type="text" name="Phonenumber"className="input" id="outlined-basic" placeholder="Phone Number"/></div>
                </div>
                <div className="lastinput"><textarea  name="Message" className="input textarea" id="outlined-basic" placeholder="Enter your Message"/></div>
                <button className="btn"> Send </button>
                </form>
                

            </div>
        </footer>
    )
}

export default Footer
