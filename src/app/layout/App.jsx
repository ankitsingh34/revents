import React from 'react';

import {Container} from 'semantic-ui-react';
import EventDashboard from '../../features/events/EventDashboard/EventDashboard.jsx';
import NavBar from '../../features/nav/NavBar/NavBar';
function App() {
  return (
    <div >
     
      <NavBar/>
      <Container className="main">
        <EventDashboard/>
      </Container>
    
    </div>
  );
}

export default App;
