import React, { useEffect, useContext } from "react";
import {
  getAllUsers,
  getConversation,
  newMessage,
  setConversation,
} from "../API/api";
import Box from "@mui/material/Box";
import { AccountContext } from "../context/AccountProvider";
import { formatTime } from "../utils/TimeFormat";

const style = {
  chatContainer: {
    height: "81vh",
    overflow: "overlay",
  },
  chat: {
    display: "flex",
    backgroundColor: "#fff",
    padding: "5px 15px",
  },
  selectedChat: {
    display: "flex",
    backgroundColor: "#f0f2f5",
    padding: "5px 15px",
  },
  dpContainer: {
    height: "70px",
    width: "15%",
    padding: "5px 15px",
  },
  dp: {
    borderRadius: "50%",
    width: "50px",
  },
  nameContainer: {
    width: "85%",
    borderBottom: "1px solid #e9edef",
  },
};
export default function Conversations(props) {
  const [users, setUsers] = React.useState([]);
  const [latestMessage, setLatestMessage] = React.useState();

  const {
    account,
    socket,
    setActiveUsers,
    sendMessageFlag,
    setSendMessageFlag,
    person,
    setPerson,
  } = useContext(AccountContext);
  const { searchText } = props;

  const getPerson = async (user) => {
    await setConversation({ senderId: account.sub, receiverId: user.sub });
    setPerson(user);
  };

  useEffect(() => {
    const getConversationDetails = async () => {
      const res = await getConversation({
        senderId: account.sub,
        receiverId: person.sub,
      });
      const data = res.conversation;
      console.log(data);
      setLatestMessage({ text: data?.message, timestamp: data?.updatedAt });
    };
    person && getConversationDetails();
  }, [sendMessageFlag, person]);

  useEffect(() => {
    async function fetchData() {
      const res = await getAllUsers();
      const filteredData = res.filter((user) =>
        user.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setUsers(filteredData);
    }
    fetchData();
  }, [searchText]);

  useEffect(() => {
    socket.current.emit("addUsers", account);
    socket.current.on("getUsers", (users) => {
      setActiveUsers(users);
    });
  }, [account]);

  return (
    <>
      <Box style={style.chatContainer}>
        {users &&
          users.map(
            (user) =>
              account.sub !== user.sub && (
                <>
                  {person.sub === user.sub ? (
                    <Box
                      style={style.selectedChat}
                      onClick={() => {
                        getPerson(user);
                      }}
                      key={user.sub}
                    >
                      <Box style={style.dpContainer}>
                        <img
                          src={user.picture}
                          style={style.dp}
                          alt="profile-pic"
                        />
                      </Box>
                      <Box style={style.nameContainer}>{user.name}</Box>
                      {latestMessage?.text && (
                        <Box>{formatTime(latestMessage?.timestamp)}</Box>
                      )}

                      <Box>
                        {latestMessage?.text?.includes("localhost")
                          ? "media"
                          : latestMessage?.text}
                      </Box>
                    </Box>
                  ) : (
                    <Box
                      style={style.chat}
                      onClick={() => {
                        getPerson(user);
                      }}
                      key={user.sub}
                    >
                      <Box style={style.dpContainer}>
                        <img
                          src={user.picture}
                          style={style.dp}
                          alt="profile-pic"
                        />
                      </Box>
                      <Box style={style.nameContainer}>{user.name}</Box>
                      {latestMessage?.text && (
                        <Box>{formatTime(latestMessage?.timestamp)}</Box>
                      )}

                      <Box>
                        {latestMessage?.text?.includes("localhost")
                          ? "media"
                          : latestMessage?.text}
                      </Box>
                    </Box>
                  )}
                </>
              )
          )}
      </Box>
    </>
  );
}
