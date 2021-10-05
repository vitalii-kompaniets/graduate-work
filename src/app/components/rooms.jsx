import React from "react";
import Footer from "./footer";
import Pagination from "./pagination";
import RoomCard from "./roomCard";

const Rooms = () => {
  return (
    <>
      <main className="main-section">
        <div className="content">
          <div className="header-content">
            <h2>Доступные номера</h2>
          </div>
          <div className="available-rooms">
            <RoomCard />
            <div className="room-card">2</div>
            <div className="room-card">3</div>
            <div className="room-card">4</div>
            <div className="room-card">5</div>
            <div className="room-card">6</div>
            <div className="room-card">7</div>
            <div className="room-card">8</div>
            <div className="room-card">9</div>
            <div className="room-card">10</div>
            <div className="room-card">11</div>
            <div className="room-card">12</div>
            <div className="room-card">13</div>
            <div className="room-card">14</div>
            <Pagination />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Rooms;
