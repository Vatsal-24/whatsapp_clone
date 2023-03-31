import React, { useState, useEffect, useContext } from "react";
import { getAllUsers } from "../../API/api";
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

    padding: "10px 15px",
  },
  dpContainer: {
    height: "70px",
    width: "15%",
    padding: "10px 15px",
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
export default function Conversations() {
  const [users, setUsers] = React.useState([]);
  const { account } = useContext(AccountContext);

  useEffect(() => {
    async function fetchData() {
      const res = await getAllUsers();
      setUsers(res);
    }
    fetchData();
  }, []);
  return (
    <>
      <Box style={style.chatContainer}>
        {users.map(
          (user) =>
            account.sub !== user.sub && (
              <>
                <Box style={style.chat}>
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