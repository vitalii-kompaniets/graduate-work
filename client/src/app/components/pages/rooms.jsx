import React, { useState } from "react";
import Pagination from "../pagination";
import RoomCard from "../roomCard";
import { paginate } from "../../utils/paginate";
import api from "../../api";

const Rooms = ({ ...rest }) => {
  const [rooms] = useState(api.rooms.fetchAll());
  const count = rooms.length;
  const pageSize = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const roomCrop = paginate(rooms, currentPage, pageSize);
  return (
    <>
      <main className="content">
        {count > 0 && (
          <div className="room-section">
            <div className="room-section_title">
              <h2>Доступные номера</h2>
            </div>
            <div className="available-rooms" key={count._id}>
              {roomCrop.map((room) => (
                <RoomCard {...rest} {...room} key={room._id} />
              ))}
            </div>
            <Pagination
              itemsCount={count}
              pageSize={pageSize}
              onPageChange={handlePageChange}
              currentPage={currentPage}
            />
          </div>
        )}
      </main>
    </>
  );
};

export default Rooms;
