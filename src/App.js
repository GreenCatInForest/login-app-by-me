import React from "react";
import { useState } from "react";

export const App = () => {
  const [loginSuccess, setLoginSuccess] = useState("");

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
    </div>
  );
};
