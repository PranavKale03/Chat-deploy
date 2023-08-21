import mongoose from "mongoose";
const { Schema } = mongoose;

const messageSchema = new Schema({
  userId: { type: String, required: false },
  userName: { type: String, required: false },
  message: { type: String, required: false },
  timestamp: { type: String, required: false },
});

const communitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  adminId: {
    type: String,
    require: true,
  },
  messages: [messageSchema],
});

const Community = mongoose.model("community", communitySchema);
const Message = mongoose.model("message", messageSchema);

export { Message };
export default Community;
