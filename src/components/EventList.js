import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCalendarAlt, FaEllipsisV, FaEye } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function EventList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const eventCollectionRef = collection(db, "Events");
  const [activeButton, setActiveButton] = useState("active");

  const navigate = useNavigate();

  async function fetchEventData() {
    setLoading(true);
    const data = await getDocs(eventCollectionRef);
    console.log(data);
    setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false);
    console.log(events);
  }

  function handleUpdateEvent(eventId) {
    navigate(`/update-event/${eventId}`);
  }

  async function handleDeleteEvent(eventId) {
    const eventDoc = doc(db, "Events", eventId);
    await deleteDoc(eventDoc);
    setEvents(events.filter((event) => event.id !== eventId));
  }

  function CreateNewEvent() {
    navigate(`/add-event`);
  }

  function getMonthFromStartDate(startDate) {
    const parsedDate = new Date(startDate);
    const month = parsedDate.toLocaleString("default", { month: "short" });
    console.log(month);
    return month;
  }

  function getDateFromStartDate(startDate) {
    const parsedDate = new Date(startDate);
    const day = parsedDate.getDate();
    return day;
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return date.toLocaleDateString("en-US", options);
  }

  useEffect(() => {
    fetchEventData();
  }, []); // to render data directly when page reloads

  if (loading) {
    return (
      <div className="flex align-item-center justify-content-center">
        <h3>Fetching data</h3>
      </div>
    );
  }

  return (
    <div className="event-details">
      <h1 className="mb-4">Manage Events</h1>
      <div className=" vh-100">
        <div className="event-states d-flex align-items-center mb-4">
          <button
            className={`btn btn-link text-decoration-none mb-2 ${
              activeButton === "active" ? "text-primary" : "text-secondary"
            }`}
            style={{ border: "none" }}
            onClick={() => setActiveButton("active")}
          >
            Active Events
            <div
              className="underline"
              style={{
                height: "2px",
                width: "130px",
                marginTop: "5px",
                backgroundColor:
                  activeButton === "active"
                    ? "var(--bs-primary)"
                    : "transparent",
              }}
            ></div>
          </button>
          <button
            className={`btn btn-link text-decoration-none mb-2 ${
              activeButton === "expired" ? "text-primary" : "text-secondary"
            }`}
            style={{ border: "none" }}
            onClick={() => setActiveButton("expired")}
          >
            Expired Events
            <div
              className="underline"
              style={{
                height: "2px",
                width: "130px",
                marginTop: "5px",
                backgroundColor:
                  activeButton === "expired"
                    ? "var(--bs-primary)"
                    : "transparent",
              }}
            ></div>
          </button>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="col-md-6">
            <input
              type="text"
              placeholder="Search Event"
              className="form-control"
            />
          </div>
          <button onClick={CreateNewEvent} className="btn btn-primary col-md-2">
            Create New Event
          </button>
        </div>

        {events && events.length > 0 ? (
          events.map((item) => (
            <div className="card border-1 rounded-3 mb-3 w-100">
              <div className="card-body p-3 d-flex justify-content-between">
                <div className="d-flex">
                  <div
                    className="bg-light rounded-1 d-flex flex-column justify-content-center align-items-center"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <h4 className="text-muted fw-bold mb-0">
                      {getMonthFromStartDate(item.startDate)}
                    </h4>
                    <h4 className="text-dark fw-bold mb-0">
                      {getDateFromStartDate(item.startDate)}
                    </h4>
                  </div>
                  <div className="ms-3">
                    <h4 className="card-title mb-0">{item.name}</h4>
                    <p className="card-text mb-0 small">
                      <FaCalendarAlt className="me-1" />
                      <b> From: </b>
                      {formatDate(item.startDate)} <b>To: </b>{" "}
                      {formatDate(item.endDate)}
                    </p>
                    <p className="card-text mb-0 small">
                      <FaLocationDot className="me-1" />
                      {item.eventVenue}
                    </p>
                    <p className="card-text mb-0 small text-muted">
                      <b>Created At: </b>June 04, 2024 <b>Updated At:</b> June
                      04, 2024
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center text-primary">
                  <FaEye
                    className="me-3 cursor-pointer"
                    onClick={() => handleDeleteEvent(item.id)}
                  />
                  <FaEllipsisV
                    className="cursor-pointer text-black"
                    onClick={() => handleUpdateEvent(item.id)}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>No data found</h1>
        )}
      </div>
    </div>
  );
}

export default EventList;
