import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";
import UserInfo from "./UserInfo";
const socket = io.connect("http://localhost:5001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <>
      <div className="App">
      <h1 className="heading_logo" onClick={()=> window.location.reload()}>chatter</h1>

        {!showChat ? (
          <div className="Home">
          <div className="joinChatContainer">
           <div>

            <h3>Join a Chat Room</h3>
            <form>
              <input
                required
                type="text"
                placeholder="Enter Name ..."
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              <input
                required
                type="text"
                placeholder="Room ID..."
                onChange={(event) => {
                  setRoom(event.target.value);
                }}
              />
              <button onClick={joinRoom}>Join</button>
            </form>
            </div>

            <div className="home_img">
                <img className="pic" src="https://img.freepik.com/free-vector/chat-conversation-mobile-phone-screen-tiny-people-group-persons-chatting-messenger-flat-vector-illustration-social-media-community-concept-banner-website-design-landing-web-page_74855-21724.jpg?w=1060&t=st=1696370361~exp=1696370961~hmac=4f0345aec7147ad0090a6d650514ab1245c3f23edd86008ec87b726b4fbd2d86"/>
          </div>    
          </div>

          
          </div>
          
          
        ) : (
        <div className="chat_container">
          <UserInfo socket={socket} username={username} room={room}/>
          <Chat socket={socket} username={username} room={room} />
        </div>

        )}
      </div>
    </>
  );
}

export default App;

