import { useState } from "react";
import { Allpages } from "./allpages";
import { Userprofile } from "./userprofile";
import { Link } from "react-router-dom";

export function Loginpage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const defaultUsername = "srinivasan@gmail.com";
  const passwordSaved = "12345";

  const getvalue = () => {
    console.log(username);
    console.log(password);
    if (username === defaultUsername && passwordSaved === password) {
      alert("Success");
    } else {
      alert("Failed");
    }
  };

  return (
    <>
      <Allpages  >
          <Userprofile  logged={true} />
        </Allpages>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh", // Set the height of the container to 100% of the viewport height
        }}
      >
        <div style={{ marginBottom: "10px" ,width: "300px"}}>
          {/* Username Input */}
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "10px" ,width: "300px" }}>
          {/* Password Input */}
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            className="form-control"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Submit and Reset Buttons */}
        <form>
          <Link to='/home' style={{ marginRight: "10px" }} className="btn btn-outline-primary" onClick={getvalue}>
            Submit
          </Link>
          <Link to='/reset' className="btn btn-outline-warning " onClick={getvalue}>
            Reset
          </Link>
        </form>
      </div>
    </>
  );
}
