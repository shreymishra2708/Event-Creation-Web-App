import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EventCreationPage from "./components/EventCreationPage";
import EventListingPage from "./components/EventListingPage";
import Navigation from "./components/Navigation";
import "./App.css";

const App = () => {
  const [events, setEvents] = useState([]);

  const createEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={<EventCreationPage onCreateEvent={createEvent} />}
          />
          <Route
            path="/events"
            element={<EventListingPage events={events} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
