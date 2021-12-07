import React from "react";
import roomImg from "../img/rooms/room-1.jpg";

const RoomCard = () => {
  return (
    <div className="room-card">
      <h1 className="room-title">Room-1</h1>
      <div className="room-image">
        <img src={roomImg} alt="Room-1" />
      </div>
    </div>
  );
};

export default RoomCard;
