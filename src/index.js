import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Switch} from "react-router-dom";
import Homepage from './views/Home/Homepage';
import Gallery from './views/Gallery/Gallery';
import Restaurant from './views/Restaurant/Restaurant';
import Activities from './views/Activities/Activities';
import Rooms from './views/Rooms/Rooms';
import RoomBook from './views/Rooms/RoomBook';
import Payment from './views/paymentSuccess/Payment';
import Admin from './views/Admin/Admin';
import Dashboard from './views/Admin/Dashboard';

ReactDOM.render(
  <HashRouter>
  <Switch>
    <Route path="/" exact component={Homepage} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/restaurant" component={Restaurant} />
    <Route path="/activities" component={Activities} />
    <Route path="/rooms" component={Rooms} />
    <Route path="/bookroom" component={RoomBook} />
    <Route path="/paymentsuccessful/:id" component={Payment}/>
    <Route path="/log-admin" component={Admin}/>
    <Route path="/admin-dashboard" component={Dashboard}/>

    

    {/* <Redirect from="*" to="/" /> */}
  </Switch>
</HashRouter>,
document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
