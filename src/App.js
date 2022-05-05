import { useState } from "react";
import "./App.css";

const USERID = "username";
const PASSWORD = "password";

function App() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const [isError, setIsError] = useState(false);

  return (
    <div className="App">
      <div className="heading">Simple Login App</div>
      <div className="subheading">
        By Akash T B, Student Id : 2021MT93738, Email :
        2021mt93738@wilp.bits-pilani.ac.in
      </div>
      <div className="label-input">
        User Name :{" "}
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setMessage("");
          }}
        />
      </div>
      <div className="label-input">
        Password :{" "}
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setMessage("");
          }}
        />
      </div>
      <div className="login-btn-div">
        <button
          className="login-btn"
          onClick={() => {
            if (username === USERID && password === PASSWORD) {
              setMessage("Login Sucessfully");
              setIsError(false);
            } else {
              setMessage("Login failed due to incorrect username and password");
              setIsError(true);
            }
          }}
        >
          Login
        </button>
      </div>
      {message && (
        <div className={isError ? "error-msg" : "success-msg"}>{message}</div>
      )}
    </div>
  );
}

export default App;
