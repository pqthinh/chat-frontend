import openSocket from "socket.io-client";

export function useSocketIo() {
  return openSocket("https://simple-chat-8.herokuapp.com", { autoConnect: false, reconnectionDelayMax: 10000, });
}
