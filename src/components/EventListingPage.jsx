import React from "react";

import "./EventListingPage.css";
const EventListingPage = ({ events }) => {
  return (
    <div className="back-ground">
      <div className="event-container">
        <div className="headingbar">
          <h1 className="event-heading">Event's</h1>
          <button className="upbtn"> Upcoming</button>
          <button className="pasbtn">Past</button>
        </div>

        <ul className="event-list">
          {events.map((event, index) => (
            <li key={index} className="event-item">
              <div className="event-cont">
                <div className="event-date">{`${event.startDateTime}`}</div>
                <div className="event-detail-img">
                  <div className="event-details">
                    <h1>{` ${event.eventName}`}</h1>

                    <div className="additional">
                      <li>By OctoML</li>
                      <li>Virtual</li>

                      <button className="invite">Invited</button>
                    </div>
                  </div>
                  <div className="event-image">
                    {event.image && (
                      <img
                        src={event.image}
                        alt={`Event ${index + 1} Image`}
                        style={{ maxWidth: "4000px", maxHeight: "400px" }}
                        className="event-image"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* {`Start: ${event.startDateTime} | End: ${event.endDateTime} | Location: ${event.location} | Type: ${event.details.type} | Permissions: ${event.details.permissions} | Capacity: ${event.details.capacity} | Visibility: ${event.details.visibility}`} */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventListingPage;
