import React, { useEffect, useContext } from "react";
import { getAllUsers } from "../API/api";
import { setConversation } from "../API/api";
import Box from "@mui/material/Box";
import { AccountContext } from "../context/AccountProvider";

const style = {
  chatContainer: {
    height: "81vh",
    overflow: "overlay",
  },
  chat: {
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
  const { account } = useContext(AccountContext);
  const { setPerson } = useContext(AccountContext);
  const { searchText } = props;

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

  const getPerson = async (user) => {
    await setConversation({ senderId: account.sub, receiverId: user.sub });
    setPerson(user);
  };
  return (
    <>
      <Box style={style.chatContainer}>
        {users &&
          users.map(
            (user) =>
              account.sub !== user.sub && (
                <>
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
                  </Box>
                </>
              )
          )}
      </Box>
    </>
  );
}
