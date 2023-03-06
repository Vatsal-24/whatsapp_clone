import "./App.css";
import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const clientID =
    "467128237129-bn4u6bmlqgolmqm0o7e7pm4mupekmgr8.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientID}>
      <div
        className="App"
        style={{
          padding: "0px",
          margin: "0px",
        }}
      >
        <Messenger />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
