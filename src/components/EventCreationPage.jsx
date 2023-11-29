import React, { useState } from "react";

import "./EventCreationPage.css";
import Image from "./invited.jpeg";
const EventCreationPage = ({ onCreateEvent }) => {
  const [eventName, setEventName] = useState("Event");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("Offline location or virtual link");
  const [eventDetails, setEventDetails] = useState({
    type: "free",
    permissions: "public",
    capacity: "",
    visibility: "public",
  });
  const [image, setImage] = useState(null);

  const createEvent = () => {
    if (eventName && startDate && startTime && endDate && endTime && location) {
      const newEvent = {
        eventName,
        startDateTime: `${startDate} ${startTime}`,
        endDateTime: `${endDate} ${endTime}`,
        location,
        details: { ...eventDetails },
        image: image ? URL.createObjectURL(image) : null,
      };
      onCreateEvent(newEvent);
      setEventName("");
      setStartDate("");
      setStartTime("");
      setEndDate("");
      setEndTime("");
      setLocation("");
      setEventDetails({
        type: "free",
        permissions: "public",
        capacity: "",
        visibility: "public",
      });
      setImage(null);
    } else {
      alert("Please fill in all required fields");
    }
  };
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  return (
    <div className="back-ground">
      <div className="container">
        <div className="event-input">
          <h1 className="heading">Create Event</h1>
          <img src="" alt="" />
          <div className="create-under">
            <label htmlFor="createUnder">Create Under</label>
            <select id="createUnder" className="createUnder">
              <option value="personal">Personal Calender</option>
              <option value="others">Other Events</option>
            </select>
          </div>

          <form>
            <input
              className="event-name"
              type="text"
              id="eventName"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              required
            />

            <div className="label-group">
              <label htmlFor="startDate">Start Date:</label>
              <label htmlFor="startTime">Start Time:</label>
            </div>

            <div className="label-group">
              <input
                type="date"
                id="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />

              <input
                type="time"
                id="startTime"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                required
              />
            </div>

            <div className="label-group">
              <label htmlFor="endDate">End Date:</label>
              <label htmlFor="endTime">End Time:</label>
            </div>
            <div className="label-group">
              <input
                type="date"
                id="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              />

              <input
                type="time"
                id="endTime"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                required
              />
            </div>

            <label htmlFor="location">Add Event Location</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />

            <div className="event-options">
              <h1 className="event-options-heading">Event Options</h1>
            </div>

            <div className="label-group">
              <label htmlFor="eventType">Tickets</label>
              <label htmlFor="permissions">Require Approval</label>
            </div>

            <div className="label-group">
              <select
                id="eventType"
                value={eventDetails.type}
                onChange={(e) =>
                  setEventDetails({ ...eventDetails, type: e.target.value })
                }
              >
                <option value="free">Free</option>
                <option value="paid">Paid</option>
              </select>

              <select
                id="permissions"
                value={eventDetails.permissions}
                onChange={(e) =>
                  setEventDetails({
                    ...eventDetails,
                    permissions: e.target.value,
                  })
                }
              >
                <option value="public">Yes</option>
                <option value="private">No</option>
              </select>
            </div>

            <div className="label-group">
              <label htmlFor="capacity">Capacity</label>
              <label htmlFor="visibility">Visibility</label>
            </div>
            <div className="label-group">
              <input
                type="number"
                id="capacity"
                value={eventDetails.capacity}
                min="0"
                onChange={(e) =>
                  setEventDetails({ ...eventDetails, capacity: e.target.value })
                }
              />

              <select
                id="visibility"
                value={eventDetails.visibility}
                onChange={(e) =>
                  setEventDetails({
                    ...eventDetails,
                    visibility: e.target.value,
                  })
                }
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>

            <label htmlFor="image">Invite</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
            />
            <button type="button" onClick={createEvent}>
              Create Event
            </button>
          </form>
        </div>
        <div className="event-card">
          <img src={Image} className="event-images" />
        </div>
      </div>
    </div>
  );
};

export default EventCreationPage;
