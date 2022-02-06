import React from "react";

const RoomCard = ({_id, title, image, facilities}) => {
  return (
      <>

          <div className="room-card">
              <h1 className="room-title">{title}</h1>
              <div className="room-image">
                  <img src={image} alt="Room"/>
              </div>
              <div className="room-facilities">
                  <p>{facilities}</p>
              </div>
              <button className="btn btn-book-now" type="submit">Book now</button>
          </div>
      </>
  );
};

export default RoomCard;
