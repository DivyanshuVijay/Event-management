import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase-config";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { MdArrowBackIos } from "react-icons/md";
import { Editor } from "@tinymce/tinymce-react";

function UpdateEvent() {
  const { eventId } = useParams();
  const [name, setName] = useState("");
  const [startingPrice, setStartingPrice] = useState("");
  const [eventDayType, setEventDayType] = useState("");
  const [eventVenue, setEventVenue] = useState("");
  const [directionLink, setDirectionLink] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [youTubeLink, setYouTubeLink] = useState("");
  const [category, setCategory] = useState("");
  const [ageLimit, setAgeLimit] = useState("");
  const [termsandcondition, setTermsandcondition] = useState("");
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    async function fetchEventData() {
      const eventRef = doc(db, "Events", eventId);
      const eventData = await getDoc(eventRef);
      if (eventData.exists()) {
        const event = eventData.data();
        setName(event.name);
        setStartingPrice(event.startingPrice);
        setEventDayType(event.eventDayType);
        setEventVenue(event.eventVenue);
        setDirectionLink(event.directionLink);
        setStartDate(event.startDate);
        setEndDate(event.endDate);
        setBannerImage(event.bannerImage);
        setYouTubeLink(event.youTubeLink);
        setCategory(event.category);
        setAgeLimit(event.ageLimit);
        setTermsandcondition(event.termsandcondition);
        setGallery(event.gallery);
      } else {
        console.log("No such event!");
      }
    }

    fetchEventData();
  }, [eventId]);

  const updateEvent = async (e) => {
    e.preventDefault();
    const eventRef = doc(db, "Events", eventId);
    await updateDoc(eventRef, {
      name: name,
      startingPrice: startingPrice,
      eventDayType: eventDayType,
      eventVenue: eventVenue,
      directionLink: directionLink,
      startDate: startDate,
      endDate: endDate,
      bannerImage: bannerImage,
      youTubeLink: youTubeLink,
      category: category,
      ageLimit: ageLimit,
      termsandcondition: termsandcondition,
      gallery: gallery,
    });

    alert("Event Updated Succesfully!!");
  };

  return (
    <div className="App pb-5">
      <div className="d-flex flex-row justify-content-between align-items-center mb-5">
        <h2>Update Event</h2>
        <a
          class="fs-6 text-decoration-none d-flex justify-content-between align-items-center"
          href="/"
        >
          <MdArrowBackIos />
          Back
        </a>
      </div>
      <form
        className="row g-3 mb-7"
        style={{
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0.1, 0.1, 0.1, 0.1)",
          borderRadius: "12px",
        }}
      >
        <div class="col-md-6">
          <label htmlFor="name">Event Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter event name"
            value={name}
            class="form-control"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div class="col-md-6">
          <label htmlFor="startingPrice">Starting Price:</label>
          <input
            type="number"
            name="startingPrice"
            id="startingPrice"
            placeholder="Enter starting price"
            value={startingPrice}
            class="form-control"
            onChange={(e) => setStartingPrice(e.target.value)}
            required
          />
        </div>

        <div class="col-md-4">
          <label htmlFor="eventDayType">Event Day Type:</label>
          <select
            name="eventDayType"
            id="eventDayType"
            value={eventDayType}
            onChange={(e) => setEventDayType(e.target.value)}
            required
            class="form-select"
          >
            <option value="" disabled hidden>
              Select event day type
            </option>
            <option value="Conference">Conference</option>
            <option value="Workshop">Workshop</option>
            <option value="Seminar">Seminar</option>
            <option value="Networking Event">Networking Event</option>
          </select>
        </div>
        <div class="col-md-4">
          <label htmlFor="eventVenue">Event Venue:</label>
          <input
            type="text"
            name="eventVenue"
            id="eventVenue"
            placeholder="Enter event venue"
            class="form-control"
            value={eventVenue}
            onChange={(e) => setEventVenue(e.target.value)}
            required
          />
        </div>
        <div class="col-md-4">
          <label htmlFor="directionLink">Direction Link :</label>
          <input
            type="url"
            name="directionLink"
            id="directionLink"
            placeholder="Enter link to directions"
            value={directionLink}
            class="form-control"
            onChange={(e) => setDirectionLink(e.target.value)}
            required
          />
        </div>

        <div class="col-md-6">
          <label htmlFor="startDate">Start Date & Time:</label>
          <input
            type="datetime-local"
            id="startDate"
            name="startDate"
            class="form-control"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div class="col-md-6">
          <label htmlFor="endDate">End Date & Time:</label>
          <input
            type="datetime-local"
            id="endDate"
            name="endDate"
            class="form-control"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>

        <div class="col-md-6">
          <label htmlFor="bannerImage">Banner Image :</label>
          <input
            type="file"
            name="bannerImage"
            id="bannerImage"
            class="form-control"
            onChange={(e) => setBannerImage(e.target.value)}
            required
          />
        </div>
        <div class="col-md-6">
          <label htmlFor="youTubeLink">YouTube Link :</label>
          <input
            type="url"
            name="youTubeLink"
            id="youTubeLink"
            class="form-control"
            placeholder="Enter YouTube link "
            value={youTubeLink}
            onChange={(e) => setYouTubeLink(e.target.value)}
            required
          />
        </div>

        <hr />

        <h3>More Information : </h3>

        <div class="col-md-6">
          <label htmlFor="category">Event Category:</label>
          <select
            name="category"
            id="category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            required
            class="form-select"
          >
            <option value="" disabled selected hidden>
              Select Category
            </option>
            <option value="Conference">Sports</option>
            <option value="Workshop">Music</option>
          </select>
        </div>
        <div class="col-md-6">
          <label htmlFor="ageLimit">Age Limit :</label>
          <input
            type="number"
            name="ageLimit"
            id="ageLimit"
            placeholder="Enter age limit"
            value={ageLimit}
            onChange={(e) => setAgeLimit(e.target.value)}
            class="form-control"
            required
          />
        </div>

        <div>
          <label htmlFor="termsandcondition">Terms & Conditions :</label>
          <Editor
            textareaName="termsandconditions"
            apiKey="dsl9i0hnj6kg4721o7omfj3e1vvzj9h5olqt1jv7g8hfmqpt"
            value={termsandcondition}
            onEditorChange={(newText) => setTermsandcondition(newText)}
            init={{
              height: 500,
              menubar: true,
              plugins: "link lists",
              toolbar:
                "undo redo | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | link",
            }}
          />
        </div>

        <div>
          <label htmlFor="Gallery">Gallery :</label>
          <input
            type="file"
            name="Gallery"
            id="Gallery"
            class="form-control"
            onChange={(e) => setGallery(e.target.value)}
            required
          />
        </div>
        <button onClick={updateEvent} class="btn btn-primary col-md-2 mt-5">
          Update Event
        </button>
      </form>
    </div>
  );
}

export default UpdateEvent;
