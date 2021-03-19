import React,{useEffect,useState} from 'react'
import Icon from "../../assests/icons/roombook.svg"
import "../../assests/css/roombooksecondcontainer.css"
import Gpay from "../../assests/icons/google-pay-primary-logo.svg"
import Visa from "../../assests/icons/visa.svg"
import MasterCars from "../../assests/icons/mastercard.svg"
import Paytm from "../../assests/icons/paytm.svg"
import Bhim from "../../assests/icons/bhim-upi.svg"
import Credit from "../../assests/icons/credit-card.svg"
import Phonepe from "../../assests/icons/phonepe-seeklogo.com.svg"
import axios from 'axios';
import CircleIcon from "../../assests/icons/circle-check.svg"
import { DeleteForever } from '@material-ui/icons'
// import { data} from 'autoprefixer'

function RoomBookSecondContainer({parentCallback,preData}) {
    const [guestList,setGuestList] = useState([])
    const [checkInDate,setCheckInDate]=useState("28 Feb ‘21, Sun")
    const [checkOutDate,setCheckOutDate]=useState("28 Feb ‘21, Sun")
    const [nights,setNights]=useState(2);
    const [rString,setRString]=useState("");
    const [adults,setAdults]=useState(0);
    const [totalAmt,setTotalAmt]=useState("")
    const [subTotalAmt,setSubTotalAmt]=useState("")
    const [taxAmt,setTaxAmt] = useState("")
    const [nameB,setName]=useState("")
    const [guest,setGuest]=useState([])
  
    useEffect(() => {
        console.log(preData,preData.length)
        var totalInputGuest=0;
        var l=2;
        var checkIn = "";
        var checkOut="";
        if(preData.length!=undefined){
        var arr=[]
        var n=2;
        const rooms = [];
        var totalAdults= 0;
        var totalAmount=0
        for(const i of preData){
            console.log(i)
            rooms.push(i.roomType);
            checkIn = i.arriveDate
            totalAmount += i.amount*1;
            checkOut = i.departDate
            // var gids=[]
            for(const j of i.roomIds){
                // console.log(j);
                for(let h = 1;h<= j.adults*1;h++){
                    var placeholder = n+" guest name";
                    var id = j.ids + h;
                    // gids.push(id)
                    arr.push(<input className="roomBookSecondInput guestNames" key={id} type="text" id={id} placeholder={placeholder} />)
                    n++;
                }
            }
            for(const j of i.adults){
                totalAdults += j*1;
            }
        }
        // gids.pop()
        // setGuestIds(gids)
        setTotalAmt(totalAmount*1);
        var stotal = Math.round(((totalAmount*82)/100));
        var tax  = totalAmount*1-stotal;
        setSubTotalAmt(stotal);
        setTaxAmt(tax)
        console.log(totalAdults)
        setAdults(totalAdults)
        // console.log(rooms)
        const roomString = rooms.join(", ");
        setRString(roomString);
        // console.log(roomString)
        // console.log(checkIn,checkOut)
        var d1 = new Date(checkIn);
        var d2 = new Date(checkOut)
        var d1s = d1.toString();
        var d2s = d2.toString();
        var finalCheckIn = d1s.substr(8,2)+ " "+ d1s.substr(4,3)+ " '" +d1s.substr(13,2)+","+d1s.substr(0,3);
        var finalCheckOut = d2s.substr(8,2)+ " "+ d2s.substr(4,3)+ " '" +d2s.substr(13,2)+","+d2s.substr(0,3);
        setCheckInDate(finalCheckIn);
        setCheckOutDate(finalCheckOut)
        arr.pop()
        setGuestList(arr);
        const diffTime = Math.abs(d2 - d1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        // console.log(diffDays)
        setNights(diffDays)
    }
     
    }, [preData])
    function ValidateEmail(mail) {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)){
          return (true)
        }
          return (false)
        }
        function validatephonenumber(inputtxt){
            var phonen = /^\d{10}$/;
            if(inputtxt.match(phonen)){
                    return (true);
            }else{
                    return (false);
            }
        }
    const payButton = (e) =>{
        e.preventDefault()
        var name="",email="",phonenumber="";
        name = document.getElementById('invName').value
        email = document.getElementById('emailBook').value
        phonenumber = document.getElementById('phoneBook').value
        console.log(preData);
        var totalrooms = [];
        var guestLists = document.getElementsByClassName('guestNames')
        // console.log(guestIds)
        
        console.log(guestLists)
        var flag=1;
        setName(name)
        setGuest(guestLists)
        for(const i of guestLists){
            if(i.value==""){
                flag=flag&0;
            }
        }
        if(email==""||name==""||phonenumber==""){
            flag = flag&0;
        }
        if(flag==1){
            if(ValidateEmail(email)){    
                if(validatephonenumber(phonenumber)){    
                var j=0;
                var billingObject = [];
                var totalAmount = 0;
                for(const i of preData){
                console.log(i)
                var adults = 0; 
                var tempList=[]
                totalrooms.push(i.roomType)
                totalAmount += i.amount*1;
                for(const k of i.adults){
                        adults += k*1;
                }
                var h = adults;
                if(j==0)adults = adults-1;
                console.log(adults)
                for(;j<guestLists.length;j++){
                        if(tempList.length == adults){
                            break;
                        }
                        tempList.push(guestLists[j].value);
                }
                console.log(tempList)
                const randomId = Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
                var tempobj={
                    guestRecords:tempList.join(","),
                    name:name,
                    arrive:i.arriveDate,
                    depart:i.departDate,
                    email:email,
                    phonenumber:phonenumber,
                    roomType: i.roomType,
                    roomId: i.roomType.split(" ")[0]+randomId,
                    totalGuests:h,
                    paid:false,
                    amount:i.amount,
                    booked:i.roomsRequired
                }
                billingObject.push(tempobj)
                console.log(billingObject)
                }
                for(let i= 1; i<guestList.length;i++){
                    console.log(guestList[i])
                }
                
                console.log("buttonClick")
                const dataObj = {
                    'amount': totalAmount*100,
                    'roomList': totalrooms.join(', '),
                    'name': name,
                    'email': email,
                    'phonenumber': phonenumber ,
                    billing:billingObject
                }
                axios.post('http://localhost:9759/api/room/createorder',dataObj)
                .then((res)=>{
                        console.log(res.data)
                        console.log(res.data.options);  
                        var options = res.data.options;
                        var rzp1 = new window.Razorpay(options); 
                        console.log(rzp1)
                        rzp1.open();
                        e.preventDefault();
         
                })
                .catch((err)=>{
                    console.log(err)
                })
                }else{
                    alert("Please Enter a Valid Phone Number")
                }
            }else{
                alert("Please Enter Valid email")
            }
        }else{
            alert("please fill all the fields")
        }
    }
    return (
             <div className="roomBookSecondContainer">
                <div className="roomBookSecondContainerFirst">
                    <div className="roomBookSecondContainerOuter">
                        <input className="roomBookSecondInput roomBookSecondName"  id="invName" type="text" placeholder="Name"/>
                        <input className="roomBookSecondInput roomBookSecondEmail"type="text" id="emailBook" placeholder="Email"/>
                        <input className="roomBookSecondInput roomBookSecondPhone"type="text" id="phoneBook" placeholder="Phone Number"/>
                        {guestList}
                        {/* <input className="roomBookSecondInput"type="text" placeholder="Name Guest 2"/>
                        <input className="roomBookSecondInput"type="text" placeholder="Name Guest 3"/>
                        <input className="roomBookSecondInput"type="text" placeholder="Name Guest 4"/> */}
                        <div className="roomBookSecondTotalBox">
                            <div className="roomBookSecondTotalBoxFirst">
                                <img src={CircleIcon}/>
                            </div>
                            <div className="roomBookSecondTotalBoxSecond">
                                <div className="roomBookSecondTotalBoxSecondFirst">
                                    <div className="roomBookFirstSecond">
                                    <div>Stay Everyday with Breakfast</div><div>₹{subTotalAmt} </div>                                     
                                    </div>
                                    <div className="roomBookFirstFourth">
                                    <div>Tax & Fees</div><div>₹{taxAmt}  </div>
                                    </div>
                                </div>
                                <div className="roomBookSecondTotalBoxSecondSecond">
                                    <div className="roomBookFirstFifth"><div>Grand total</div> <div>₹{totalAmt} </div></div>
                                   
                                </div>
                            </div>
                        </div>
                        <button className="payNowBtn" id="rzp-button1" onClick={payButton}>Pay</button>
                    </div>
                    <div className="roomBookSecondContainerSecond">
                        <div className="roomBookSecondContent">You need to show a valid government ID proof upon arriving to the hotel.Please Print the payment receipt after payment </div>
                        <div>
                            <div className="roomBookSecondCheckIn">
                                <div className="roomBookSecondCheckInFirst">
                                    <div>Check In</div>
                                    <div>{checkInDate}</div>
                                </div>
                                <div className="roomBookSecondCheckInSecond">
                                    <div>Check Out</div>
                                    <div>{checkOutDate}</div>
                                </div>
                            </div>
                            <div className="roomBookSecondFacilities">
                                <div className="roomBookSecondFacilitiesFirst">
                                    <div>No of Nights : &nbsp;{nights} Nights</div>
                                    <div>Room&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;{rString} </div>
                                    <div>Guests&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;{adults} Adults</div>
                                </div>
                                {/* <div className="roomBookSecondFacilitiesSecond">
                                    <div>{nights} Nights</div>
                                    <div>{rString}</div>
                                    <div>{adults} Adults</div>
                                </div> */}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="paymentsMethods">
                <img src={Gpay} /> 
                <img src={Visa} /> 
                <img src={MasterCars} /> 
                <img src={Paytm} /> 
                <img src={Bhim} /> 
                <img src={Credit} /> 
                <img src={Phonepe} /> 
                </div>
            </div>

    )
}

export default RoomBookSecondContainer
