import React from "react";
import { useState } from "react";

import { Login } from "./components/Login";

export const App = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);

  const loginPasswordMatch = () => {
    setLoginSuccess(true);
  };

  return (
    <div>
      <div>Login form</div>
      <div>Enter your e-mail and password to log in, please </div>
      <form>
        <label>
          E-mail
          <input type="e-mail" name="e-mail" />
        </label>
        <label>
          Password
          <input type="text" name="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {!loginSuccess ? <Login /> : "Hello" + { email }}
    </div>
  );
};
