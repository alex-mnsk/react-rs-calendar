import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import CalendarHeader from './CalendarHeader'
import Month from './Month'
import ForWeek from './ForWeek'
import Event from './Event'


class App extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    month = () => {
        return <Month
            year={this.props.year}
            month={this.props.month}
            events={this.props.events.toJS()}
            today={this.props.today}
        />
    }

    forWeek = () => {
        return  <ForWeek
            year={this.props.year}
            month={this.props.month}
            week={this.props.week}
            events={this.props.events.toJS()}
            today={this.props.today}
        />
    }

    event = () => {
        return <Event
            events={this.props.events.toJS()}
            history={this.props.history}
            speakers={this.props.speakers.toJS()}
            location={this.props.location}
        />
    }


 componentDidMount() {
     this.props.getEvents();
     this.props.getSpeakers();
 }

 render() {
     return (
         <MuiThemeProvider>
             <div className="calendar">
                 <CalendarHeader
                     prevMonth={this.props.prevMonth}
                     nextMonth={this.props.nextMonth}
                     prevWeek={this.props.prevWeek}
                     nextWeek={this.props.nextWeek}
                     today={this.props.today}
                     year={this.props.year}
                     month={this.props.month}
                     location={this.props.location}
                 />
                 <Switch>
                     <Route exact path='/' component={this.month} />
                     <Route path='/forWeek' component={this.forWeek} />
                     <Route path='/event/:id' component={this.event} />
                 </Switch>
             </div>
         </MuiThemeProvider>
     );
 }
}

export default withRouter(connect(
    (state) => ({
        year: state.calendar.get('year'),
        month: state.calendar.get('month'),
        week: state.calendar.get('week'),
        events: state.events.get('events'),
        currentEvent: state.events.get('currentEvent'),
        speakers: state.speakers.get('speakers'),
    }),
    (dispatch) => ({
        getEvents: () => dispatch({
            type: 'FETCH_EVENTS'
        }),
        getSpeakers: () => dispatch({
            type: 'FETCH_SPEAKERS',
        }),
        prevMonth: () => dispatch({
            type: 'PREV_MONTH'
        }),
        nextMonth: () => dispatch({
            type: 'NEXT_MONTH'
        }),
        prevWeek: () => dispatch({
            type: 'PREV_WEEK'
        }),
        nextWeek: () => dispatch({
            type: 'NEXT_WEEK'
        }),
        today: () => dispatch({
            type: 'TODAY'
        })
    })
)(App));
