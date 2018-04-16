import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
BigCalendar.momentLocalizer(moment);
var event = [
        {
          'title': 'All Day Event',
          'allDay': true,
          'startDate': new Date(2018, 3, 11),
          'endDate': new Date(2018, 3, 11)
        },
        {
          'title': 'Long Event',
          'startDate': new Date(2018, 3, 7),
          'endDate': new Date(2018, 3, 10)
        },
]
class App extends Component {
  constructor() {
    super();
    this.state = {
      events:event
    };
    this.handleSelectSlot = this.handleSelectSlot.bind(this);
  }
  handleSelectSlot({start, end})
  {
    console.log("handleSelectSlot: " + start + " - " + end);
    this.state.events.push({startDate: start, endDate: end, title: "Test"});
    console.log(start);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <BigCalendar
          events={this.state.events}
          selectable={true}
          onSelectSlot={this.handleSelectSlot}
          startAccessor='startDate'
          endAccessor='endDate'
          />
      </div>
    );
  }
}

export default App;
