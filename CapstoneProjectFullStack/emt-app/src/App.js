import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEventsComponent from './components/ListEventsComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddEventComponent from './components/AddEventComponent';
import UpdateEventComponent from './components/UpdateEventComponent';
import ViewEventComponent from './components/ViewEventComponent';
import HelpComponent from './components/HelpComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch>   
                          <Route path = "/" exact component = {ListEventsComponent}></Route>
                          <Route path = "/events" component = {ListEventsComponent}></Route>
                          <Route path = "/add_event" component = {AddEventComponent}></Route>
                          <Route path = "/update_event/:id" component = {UpdateEventComponent}></Route>
                          <Route path = "/event/:id" component = {ViewEventComponent}></Route>
                          <Route path = "/contact" component = {HelpComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
