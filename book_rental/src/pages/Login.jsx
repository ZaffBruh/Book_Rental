import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login">
      <h1>Please Log In</h1>
      <button onClick={loginWithRedirect}>Log In with Auth0</button>
    </div>
  );
};

export default Login;
