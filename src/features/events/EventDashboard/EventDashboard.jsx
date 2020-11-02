import React, { Component } from 'react'
import {Grid,Button} from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm'; 
import cuid from 'cuid';
import {connect} from 'react-redux';
import {createEvent,updateEvent,deleteEvent} from '../eventActions';
const mapState=(state)=>({
  events:state.events
})
const actions={
 // createEvent,
  deleteEvent,
  //updateEvent
}
class EventDashboard extends Component {
  
    // state = {
    //     isopen:false,
    //     selectedEvent:null
    // }

    // handleFormOpen=()=>{
    //     this.setState({
    //        selectedEvent: null,
    //         isopen:true
    //     })
    // }
    // handleCancel=()=>{
    //     this.setState({
    //         isopen:false
    //     })
    // }
    // handleUpdateEvent=(updatedEvent)=>{
    //   // this.setState({
    //   //   events:this.state.events.map(event=>{
    //   //     if(event.id===updatedEvent){
    //   //       return Object.assign({},updatedEvent);
    //   //     }else{
    //   //       return event
    //   //     } 
    //   //   }),
    //   //   isopen:false,
    //   //   selectedEvent:null
    //   // })
    //   this.props.updateEvent(updatedEvent)
    //   this.setState({
    //     isopen:false,
    //     selectedEvent:null
    //   })
    // }
    // handleOpenEvent =(eventToOpen)=>()=>{
    //   this.setState({
    //     selectedEvent:eventToOpen ,
    //     isopen:true
    //   })  
    // }
    // handleCreateEvent=(newEvent)=>{
    //   newEvent.id = cuid();
    //   console.log(newEvent.id);
    //   newEvent.hostPhotoURL = '/assets/user.png'
    //  // const updatedEvents = [newEvent,...this.state.events];
    //   // this.setState({
    //   //   events:updatedEvents,
    //   //   inOpen:false
    //   // })
    //   this.props.createEvent(newEvent);
    //   this.setState({
    //     isopen:false,
    //     selectedEvent:null
    //   })
    // }
    handleDeleteEvent =(eventId)=>()=>{
      // const updatedEvents  = this.state.events.filter(e=>e.id!==eventId);
      // this.setState({
      //   events:updatedEvents
      // })
      this.props.deleteEvent(eventId);
    }
    render() {
     //  const {selectedEvent} = this.state;
       const {events} = this.props;
        return (
            <Grid> 
                <Grid.Column width={10}>
                    <EventList 
                    deleteEvent={this.handleDeleteEvent}
                   //  onEventOpen={this.handleOpenEvent} 
                     events={events}
                    />    
                </Grid.Column>
                <Grid.Column  width={6}>
                    {/* <Button 
                    onClick={this.handleFormOpen} 
                    positive content="create Event"/>
                  {this.state.isopen && 
                    <EventForm 
                      updateEvent={this.handleUpdateEvent}
                      selectedEvent={selectedEvent} 
                      createEvent={this.handleCreateEvent}
                      handleCancel={this.handleCancel}/>}  */}
                </Grid.Column>
            </Grid>
        )
    }
}
export default connect(mapState,actions)(EventDashboard) ;