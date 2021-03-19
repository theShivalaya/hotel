import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import "../../assests/css/payment.css"
import UpperHeaderPayment from '../../components/Headers/UpperHeaderPayment';
import Footer from '../../components/Footer/Footer';
// import Pdf from "react-to-pdf";
import html2canvas from 'html2canvas';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CircleIcon from "../../assests/icons/circle-check.svg"
import PrintIcon from "../../assests/icons/print.svg"


import { jsPDF } from "jspdf";
function Payment() {
    const {id} = useParams()
    useEffect(() => {
        axios.get('http://localhost:9759/api/room/getbill/?id='+id,{})
        .then((res)=>{
            Date.prototype.yyyymmdd = function() {
                var mm = this.getMonth() + 1; // getMonth() is zero-based
                var dd = this.getDate();
              
                return [this.getFullYear(),
                        (mm>9 ? '' : '0') + mm,
                        (dd>9 ? '' : '0') + dd
                        ].join('-');
            };
            console.log(res.data)
            setOrder_Id(res.data.billId)
            const d = new Date;
            setBillDate(d.yyyymmdd())
            setBillName(res.data.invoiceName)
            setPhoneNumber(res.data.phonenumber)
            setEmail(res.data.email)
            setTotalAmount(res.data.amount)
            
            setCheckOutDate(res.data.departure)
            setCheckInDate(res.data.arrival)
            var arr = res.data.roomsBooked.split(',')
            var d1 = new Date(res.data.arrival)
            var d2 = new Date(res.data.departure)
            const diffTime = Math.abs(d2 - d1);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            var  rowsarr= []
            let count = 1;
            var stotal = Math.round(((res.data.amount*1)*82)/100);
            var taxamount = res.data.amount*1-stotal;
            setTax(taxamount)
            setSubTotal(stotal)
            for(const i of arr){ 
                console.log(i.split(':'))
                var sp = i.split(':')
                var cost = 0;
                if(sp[0].trim()=="DELUX ROOM"){
                    cost=3500;
                }else if(sp[0].trim()=="MINI SUITE"){
                    cost=5000;
                }else{
                    cost=7500
                }
                rowsarr.push(
                    <tr>
                    <td className="trtdfirst">{count}</td>
                    <td>{sp[0].trim()}</td>
                    <td>{sp[1].trim()}</td>
                    <td>{diffDays}</td>
                    <td>₹{cost}</td>
                    <td className="trtdlast">₹{cost*(diffDays)*(sp[1].trim()*1)}</td>
                    </tr>
                    
                )
                 count++;
            }
            setRows(rowsarr)
            var glist = res.data.totalGuest.split(',');
            var glistarr=[]
            for(const i of glist){
                glistarr.push(<div>{i}</div>)
            }
            setGuestList(glistarr)
        })
    }, [id])
    const [order_id,setOrder_Id] = useState("")
    const [billDate,setBillDate] = useState("")
    const [billName,setBillName] = useState("")
    const [phoneNumber,setPhoneNumber]=useState("")
    const [totalAmount,setTotalAmount]=useState("")
    const [email,setEmail] = useState("")
    const [checkInDate,setCheckInDate] = useState("")
    const [checkOutDate,setCheckOutDate] = useState("")
    const [rows,setRows]=useState([])
    const [guestList,setGuestList] = useState([])
    const [subTotal,setSubTotal]=useState("")
    const [tax,setTax]=useState("")
    console.log(id)
    const ref = React.createRef();
    const printDocument = ()=> {
        htmlToImage.toPng(document.getElementById('divToPrint'), { quality: 0.95 })
        .then(function (dataUrl) {
          var link = document.createElement('a');
          link.download = 'my-image-name.jpeg';
          const pdf = new jsPDF();          
          pdf.addImage(dataUrl, 'PNG', 0, 0);
          pdf.save("download.pdf"); 
        });

        // const input = document.getElementById('divToPrint');
        // html2canvas(input)
        //   .then((canvas) => {
        //       console.log(canvas)
        //     document.body.appendChild(canvas); 
        //     // const imgData = canvas.toDataURL('image/png');
        //     // console.log(canvas,imgData)
        //     // const pdf = new jsPDF();
        //     // pdf.addImage(imgData, 'JPEG', 0, 0);
        //     // // pdf.output('dataurlnewwindow');
        //     // pdf.save("download.pdf");
        //   })
        // ;
      }
    return (
        
            <div className="paymentMain">
            <UpperHeaderPayment className="printHeader"/>
            {/* <Pdf targetRef={ref} filename="BookinReceipt.pdf">
            {({ toPdf }) => <button onClick={toPdf}>Download Now</button>}
            </Pdf> */}
            {/* <button onClick={printDocument}>Download Now</button> */}
            <div className="paymentOuterContainer">
                <div className="paymentOuterContainer1">
                    <div className="paymentOuterContainer11">
                        <div className="paymentBookIconTick"><img src={CircleIcon}/></div>
                        <div>
                            <div className="paymentBookText1">Your Booking is Confirmed</div>
                            <div className="paymentBookText2">Thank you for booking with us</div>
                            <div></div>
                        </div>
                    </div>
                    <div className="paymentOuterContainer12">
                        <div className="paymentOuterContainer121">
                            <div className="paymentBookText3">Booking Refernce Number</div>
                            <div className="paymentBookText4">{order_id}</div>
                        </div>
                        <div className="paymentBookText5">Print Date : {billDate} </div>
                    </div>
                </div>
                <div className="paymentOuterContainer2">
                    <div className="paymentOuterContainer21">We recommed that you print this page now, and bring it with you for check-in at the hotel. Please Bring goverment Id along with you at the time of Check-In</div>
                    <div className="paymentOuterContainer22">
                        <div className="paymentBookPrintIcon" onClick={()=>{
                            window.print()
                            var result = window.confirm("Have you printed the receipt?")
                            console.log(result)
                            if(result){
                            window.location.href='/hotel/#/'
                            }
                        }}><img src={PrintIcon}/></div>
                        <div className="recieptGenerator" onClick={()=>{
                            window.print()
                            var result = window.confirm("Have you printed the receipt?")
                            console.log(result)
                            if(result){
                            window.location.href='/hotel/#/'
                            }
                        }}>Print your Receipt</div>
                    </div>
                </div>

                
            </div>
            <div ref={ref} id="divToPrint" class="invoice-box">
            <table cellpadding="0" cellspacing="0">
            <tr class="top">
                <td colspan="2">
                    <table>
                        <tr>
                            <td class="title">
                                SHIVALAYA RESORT
                            </td>
                            
                            <td>
                                Invoice  : {order_id}<br/>
                                Printed  : {billDate}<br/>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr> 
                <td>CheckIn  : <b>{checkInDate}</b></td>
                <td>CheckOut : <b>{checkOutDate}</b></td>

            </tr>
            <tr class="information">
                <td colspan="2">
                    <table>
                        <tr>
                            <td>
                                Shivalaya Resort,<br/>
                                Nanital,<br/>
                                Uttrakhand
                            </td>
                            
                            <td>
                                {billName}<br/>
                                {phoneNumber}<br/>
                                {email}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            
            <tr class="heading1">
                <td>
                    Payment Method
                </td>
                
                <td>
                    Total Amount
                </td>
            </tr>
            
            <tr class="details">
                <td>
                    Razorpay
                </td>
                
                <td>
                    ₹{totalAmount}
                </td>
            </tr>
            
           
            
            <tr class="item">
            <td colSpan="2" >
                    <table className="innerTable">
                        <thead>
                            <tr>
                            <td>S.No</td>
                            <td>Rooms</td>
                            <td>Quantity</td>
                            <td>Nights</td>
                            <td>Cost</td>
                            <td className="lastTd">Price</td>
                            </tr>
                        </thead>
                        {rows}
                        {/* <tr className="spaceClass">
                            <td></td>
                        </tr> */}
                        <tr className="LastbillTableRow">
                           <td className="trtdfirst"></td> 
                           <td></td> 
                           <td></td> 
                           <td></td> 
                           <td className="billTableAmount1">Subtotal</td> 
                           <td className="trtdlast billTableAmount2">₹{subTotal}</td> 

                        </tr>
                           <tr className="LastbillTableRow">
                           <td className="trtdfirst"></td> 
                           <td></td> 
                           <td></td> 
                           <td></td> 
                           <td className="billTableAmount1">Tax and Charges</td> 
                           <td className="trtdlast billTableAmount2">₹{tax}</td> 

                        </tr>
                        <tr className="LastbillTableRow">
                           <td className="trtdfirst"></td> 
                           <td></td> 
                           <td></td> 
                           <td></td> 
                           <td className="billTableAmount1">Total Amount</td> 
                           <td className="trtdlast billTableAmount2">₹{totalAmount}</td> 

                        </tr>
                        {/* {   rows.map( i =>(
                            <tr>
                                <td>S.No</td>
                                <td>Rooms</td>
                                <td>Quantity</td>
                                <td>Nights</td>
                                <td>Cost</td>
                                <td>Price</td>
                            </tr>
                        ))}  */}

                    </table>
                </td>
            </tr>
                  
            </table>
            <div className="guestListBill">
                 <div className="guestListBill1">
                     <div className="guestListBill11">Guest List</div>
                        {guestList}
                 </div>
                 <div className="guestListBill2">Note- Please Bring a valid Government Id and Reciept at the time of Checkin</div>

            </div>
            
            </div>
            
            <Footer className="printFooter"/>
        </div>
    )
}

export default Payment
