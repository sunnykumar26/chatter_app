
import React, { useEffect, useState } from 'react';

function UserInfo({ socket, username, room }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('update_user_list', (users) => {
      setUsers(users);
    });
  }, [socket]);

  return (
    <div className='top_head'>
      <h1>Welcome {username} to Room: {room}</h1>
    </div>
  );
}

export default UserInfo;

