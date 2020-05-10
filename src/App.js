import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import StartMeeting from "./components/StartMeeting";
import MeetingRoom from "./components/MeetingRoom";

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Route path="/" exact component={StartMeeting} />
      <Route path="/:roomId" exact component={MeetingRoom} />
    </React.Fragment>
  </BrowserRouter>
);
export default App;
