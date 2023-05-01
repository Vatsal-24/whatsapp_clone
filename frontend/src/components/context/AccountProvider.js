import { useState, createContext, useEffect, useRef } from "react";
import { io } from "socket.io-client";
export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [person, setPerson] = useState({});
  const [activeUsers, setActiveUsers] = useState([]);
  const [sendMessageFlag, setSendMessageFlag] = useState(false);
  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:9000");
  }, []);

  return (
    <>
      <AccountContext.Provider
        value={{
          account,
          setAccount,
          person,
          setPerson,
          socket,
          activeUsers,
          setActiveUsers,
          sendMessageFlag,
          setSendMessageFlag,
        }}
      >
        {children}
      </AccountContext.Provider>
    </>
  );
};

export default AccountProvider;
