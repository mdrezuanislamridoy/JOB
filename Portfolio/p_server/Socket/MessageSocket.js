const users = {};
let ioInstance = null;

const MessageSocket = (io) => {
  ioInstance = io;
  io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;

    if (userId) {
      users[userId] = socket.id;
      io.emit("getOnlineUsers", Object.keys(users));
    }

    socket.on("disconnect", () => {
      delete users[userId];
      io.emit("getOnlineUsers", Object.keys(users));
    });
  });
};

const getIo = () => ioInstance;
const getusers = () => {
  return users;
};

module.exports = { MessageSocket, getIo, getusers };
