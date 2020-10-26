import React from 'react';
import {Route,Switch} from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import EventDashboard from '../../features/events/EventDashboard/EventDashboard.jsx';
import EventForm from '../../features/events/EventForm/EventForm.jsx';
import NavBar from '../../features/nav/NavBar/NavBar';
import EventDetailedPage from '../../features/events/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage  from '../../features/user/UserDetailed/UserDetailedPage';
import SettingDashboard from '../../features/user/Settings/SettingDashboard';
import  HomePage from '../../features/home/HomePage';

const App=()=> {
  return (
    <div>
      <Switch>
        <Route exact path='/'   component={HomePage}/>
      </Switch>
      <Route path="/(.+)"  render={()=>(
           <div >     
           <NavBar/>
           <Container className="main">
             <Switch>
              <Route  path='/events' component={EventDashboard}/>
               <Route  path='/events/:id' component={EventDetailedPage}/>
               <Route  path='/people' component={PeopleDashboard}/>
               <Route  path='/profile/:id' component={UserDetailedPage}/>
               <Route  path='/settings' component={SettingDashboard}/>
               <Route  path='/createEvent' component={EventForm}/>
             </Switch>
           </Container>
         </div>
      )} />
    </div>
   
  );
}

export default App;
