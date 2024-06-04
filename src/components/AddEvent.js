import React, { useState } from "react";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { MdArrowBackIos } from "react-icons/md";
import { Editor } from "@tinymce/tinymce-react";

function AddEvent() {
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

  const eventCollectionRef = collection(db, "Events");

  async function createEvent(e) {
    e.preventDefault(); // Prevent default form submission behavior
    await addDoc(eventCollectionRef, {
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

    alert("Event Created Successfully!");
  }

  return (
    <div className="App pb-5">
      <div className="d-flex flex-row justify-content-between align-items-center mb-5">
        <h2>Create Event</h2>
        <a
          class="fs-6 text-decoration-none d-flex justify-content-between align-items-center"
          href="/"
        >
          <MdArrowBackIos />
          Back
        </a>
      </div>
      <form
        className="row g-3 mb-7 rounded-3"
        style={{
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0.1, 0.1, 0.1, 0.1)",
        }}
      >
        <div class="col-md-6">
          <label for="name" class="form-label">
            Event Name:
            <span class="required" style={{ color: "red", marginLeft: "5px" }}>
              *
            </span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            class="form-control"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div class="col-md-6">
          <label for="startingPrice" class="form-label">
            Starting Price:
            <span class="required" style={{ color: "red", marginLeft: "5px" }}>
              *
            </span>
          </label>
          <input
            type="number" // Adjust to "text" if including currency symbol
            name="startingPrice"
            id="startingPrice"
            class="form-control"
            onChange={(e) => setStartingPrice(e.target.value)}
            required
          />
        </div>

        <div class="col-md-4">
          <label htmlFor="eventDayType" class="form-label">
            Event Day Type:
            <span class="required" style={{ color: "red", marginLeft: "5px" }}>
              *
            </span>
          </label>
          <select
            name="eventDayType"
            id="eventDayType"
            onChange={(e) => setEventDayType(e.target.value)}
            required
            class="form-select"
          >
            <option value="" disabled selected hidden>
              Select event day type
            </option>
            <option value="Conference">Conference</option>
            <option value="Workshop">Workshop</option>
            <option value="Seminar">Seminar</option>
            <option value="Networking Event">Networking Event</option>
          </select>
        </div>

        <div class="col-md-4">
          <label for="eventVenue" class="form-label">
            Event Venue:
            <span class="required" style={{ color: "red", marginLeft: "5px" }}>
              *
            </span>
          </label>
          <input
            type="text"
            name="eventVenue"
            id="eventVenue"
            class="form-control"
            onChange={(e) => setEventVenue(e.target.value)}
            required
          />
        </div>
        <div class="col-md-4">
          <label for="directionLink" class="form-label">
            Direction Link :
            <span class="required" style={{ color: "red", marginLeft: "5px" }}>
              *
            </span>
          </label>
          <input
            type="url"
            name="directionLink"
            id="directionLink"
            class="form-control"
            onChange={(e) => setDirectionLink(e.target.value)}
            required
          />
        </div>

        <div class="col-md-6">
          <label for="startDate" class="form-label">
            Start Date & Time:
            <span class="required" style={{ color: "red", marginLeft: "5px" }}>
              *
            </span>
          </label>
          <input
            type="datetime-local"
            id="startDate"
            name="startDate"
            className="form-control"
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div class="col-md-6">
          <label for="endDate" class="form-label">
            End Date & Time:
            <span class="required" style={{ color: "red", marginLeft: "5px" }}>
              *
            </span>
          </label>
          <input
            type="datetime-local"
            id="endDate"
            name="endDate"
            className="form-control"
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>

        <div class="col-md-6">
          <label for="bannerImage" class="form-label">
            Banner Image :
            <span class="required" style={{ color: "red", marginLeft: "5px" }}>
              *
            </span>
          </label>
          <input
            type="file"
            name="bannerImage"
            id="bannerImage"
            className="form-control"
            onChange={(e) => setBannerImage(e.target.value)}
            required
          />
        </div>
        <div class="col-md-6">
          <label for="youTubeLink" class="form-label">
            YouTube Link :
            <span class="required" style={{ color: "red", marginLeft: "5px" }}>
              *
            </span>
          </label>
          <input
            type="url"
            name="youTubeLink"
            id="youTubeLink"
            className="form-control"
            onChange={(e) => setYouTubeLink(e.target.value)}
            required
          />
        </div>

        <hr />

        <h3>More Information : </h3>

        <div class="col-md-6">
          <label htmlFor="category" class="form-label">
            Event Category:
            <span class="required" style={{ color: "red", marginLeft: "5px" }}>
              *
            </span>
          </label>
          <select
            name="category"
            id="category"
            onChange={(e) => setCategory(e.target.value)}
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
          <label for="ageLimit" class="form-label">
            Age Limit :
            <span class="required" style={{ color: "red", marginLeft: "5px" }}>
              *
            </span>
          </label>
          <input
            type="number"
            name="ageLimit"
            id="ageLimit"
            className="form-control"
            onChange={(e) => setAgeLimit(e.target.value)}
            required
          />
        </div>

        <div>
          <label for="termsandcondition" class="form-label">
            Terms & Conditions :
            <span class="required" style={{ color: "red", marginLeft: "5px" }}>
              *
            </span>
          </label>
          <Editor
            textareaName="termsandconditions"
            apiKey="dsl9i0hnj6kg4721o7omfj3e1vvzj9h5olqt1jv7g8hfmqpt"
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
          <label for="Gallery" class="form-label">
            Gallery :
            <span class="required" style={{ color: "red", marginLeft: "5px" }}>
              *
            </span>
          </label>
          <input
            type="file"
            name="Gallery"
            id="Gallery"
            className="form-control"
            onChange={(e) => setGallery(e.target.value)}
            required
          />
        </div>
        <button onClick={createEvent} class="btn btn-primary col-md-1">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddEvent;
