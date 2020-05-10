import React, { useState } from "react";
import shortId from "shortid";
import OnetoOneVideoImage from "../assets/OnetoOneVideoImage.png";
const StartMeeting = ({ history }) => {
  const [roomId, setRoomId] = useState(shortId.generate());

  const goToRoom = () => {
    history.push(`/${roomId}`);
  };

  return (
    <div className="enter-room-container">
      <img src={OnetoOneVideoImage} alt="metting" />
      <form>
        <input
          type="text"
          value={roomId}
          placeholder="Room id"
          onChange={(event) => {
            setRoomId(event.target.value);
          }}
        />
        <button disabled={!roomId} onClick={goToRoom}>
          Enter
        </button>
      </form>
    </div>
  );
};

export default StartMeeting;
