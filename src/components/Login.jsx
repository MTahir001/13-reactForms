import { useState } from "react";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: {
      value: "",
      didEdit: false,
    },
    password: {
      value: "",
      didEdit: false,
    },
  });

  function handleInputChange(identifier, value) {
    setEnteredValues((prev) => {
      return {
        ...prev,
        [identifier]: { ...prev[identifier], value, didEdit: false },
      };
    });
  }
  function handleInputValidation(identifier) {
    setEnteredValues((prev) => {
      return {
        ...prev,
        [identifier]: { ...prev[identifier], didEdit: true },
      };
    });
    console.log(`lost focus from ${identifier}`);
  }

  const emailIsInValid =
    enteredValues.email.didEdit && !enteredValues.email.value.includes("@");

  console.log(emailIsInValid);
  return (
    <form>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(e) => handleInputChange("email", e.target.value)}
            value={enteredValues.email.value}
            onBlur={() => handleInputValidation("email")}
          />
          <div className="control-error">
            {emailIsInValid && <p>Please enter valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) => handleInputChange("password", e.target.value)}
            value={enteredValues.password.value}
            onBlur={() => handleInputValidation("password")}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
