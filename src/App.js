import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddEvent from "./components/AddEvent";
import EventList from "./components/EventList";
import UpdateEvent from "./components/UpdateEvent";

import Layout from "./components/Layout"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="add-event" element={<AddEvent />} />
          <Route path="" element={<EventList />} />
          <Route path="update-event/:eventId" element={<UpdateEvent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
