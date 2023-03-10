import "./App.css";
import Messenger from "./components/Messenger";
import ChatDialog from "./components/chat/ChatDialog";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./components/context/AccountProvider";

function App() {
  const clientID =
    "467128237129-bn4u6bmlqgolmqm0o7e7pm4mupekmgr8.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientID}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
