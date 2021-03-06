import roomImg1 from "../../img/rooms/room-1.jpg";
import roomImg2 from "../../img/rooms/room-2.jpg";
import roomImg3 from "../../img/rooms/room-3.jpg";
import roomImg4 from "../../img/rooms/room-4.jpg";

const rooms = [
  {
    _id: "67rdca3eeb7f6fgeed471815",
    title: "Studio",
    image: roomImg1,
    facilities: "TV, Wi-Fi, phone, shower",
  },
  {
    _id: "67rdca3eeb7f6fgeed471816",
    title: "Superior",
    image: roomImg2,
    facilities: "TV, Wi-Fi, phone, shower",
  },
  {
    _id: "67rdca3eeb7f6fgeed471817",
    title: "Double",
    image: roomImg3,
    facilities: "TV, Wi-Fi, phone, shower",
  },
  {
    _id: "67rdca3eeb7f6fgeed471818",
    title: "Superior sea view",
    image: roomImg4,
    facilities: "TV, Wi-Fi, phone, shower",
  },
  {
    _id: "67rdca3eeb7f6fgeed471819",
    title: "Family room",
    image: roomImg1,
    facilities: "TV, Wi-Fi, phone, shower",
  },
  {
    _id: "67rdca3eeb7f6fgeed471820",
    title: "Double sea view",
    image: roomImg2,
    facilities: "TV, Wi-Fi, phone, shower",
  },
  {
    _id: "67rdca3eeb7f6fgeed471821",
    title: "Standart sea view",
    image: roomImg3,
    facilities: "TV, Wi-Fi, phone, shower",
  },
  {
    _id: "67rdca3eeb7f6fgeed471822",
    title: "Superior sea-side view",
    image: roomImg4,
    facilities: "TV, Wi-Fi, phone, shower",
  },
  {
    _id: "67rdca3eeb7f6fgeed471823",
    title: "Standart sea-side view",
    image: roomImg1,
    facilities: "TV, Wi-Fi, phone, shower",
  },
  {
    _id: "67rdca3eeb7f6fgeed471824",
    title: "Double sea-side view",
    image: roomImg2,
    facilities: "TV, Wi-Fi, phone, shower",
  },
  {
    _id: "67rdca3eeb7f6fgeed47181f",
    title: "Studio-2",
    image: roomImg3,
    facilities: "TV, Wi-Fi, phone, shower",
  },
  {
    _id: "67rdca3eeb7f6fgeed47181r",
    title: "Studio-3",
    image: roomImg4,
    facilities: "TV, Wi-Fi, phone, shower",
  },
  {
    _id: "67rdca3eeb7f6fgeed47191r",
    title: "Studio-4",
    image: roomImg1,
    facilities: "TV, Wi-Fi, phone, shower",
  },
  {
    _id: "67rdca3eeb7f6fgeed47171r",
    title: "Studio-5",
    image: roomImg2,
    facilities: "TV, Wi-Fi, phone, shower",
  },
];

export function fetchAll () {
  return rooms
}
