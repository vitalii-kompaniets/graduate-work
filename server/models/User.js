const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      uniq: true,
    },
    password: {
      type: String,
    },
    bookedRooms: [{ type: Schema.Types.ObjectId, ref: "Room" }],
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", schema);
