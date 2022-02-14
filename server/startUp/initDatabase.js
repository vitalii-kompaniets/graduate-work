const Room = require("../models/Room");
const roomsMock = require("../mock/rooms.json");

module.exports = async () => {
  const rooms = await Room.find();
  if (rooms.length !== roomsMock.length) {
    await createInitialEntity(Room, roomsMock);
  }
};

async function createInitialEntity(Model, data) {
  await Model.collection.drop();
  return Promise.all(
    data.map(async (item) => {
      try {
        delete item._id;
        const newItem = new Model(item);
        await newItem.save();
        return newItem;
      } catch (e) {
        return e;
      }
    })
  );
}
