import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import "./EntryPage.css";
import LoginForm from "../../components/Login/LoginForm";
import PasswordReset from "../../components/password-reset/PasswordReset";

const EntryPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frmLoad, setFrmLoad] = useState("login");

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Fill up all the form!");
    }
    //TODO CALL API TO SUBMIT FROM
    console.log(email, password);
  };
  const handleOnReset = (e) => {
    e.preventDefault();
    if (!email ) {
      return alert("Please Enter The Email!");
    }
    //TODO CALL API TO SUBMIT FROM
    console.log(email);
  };
  const formSwitcher = (frmType) => {
    setFrmLoad(frmType);
  };

  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        {frmLoad === "login" && (
          <LoginForm
            handleOnchange={handleOnchange}
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
            email={email}
            pass={password}
          />
        )}
        {frmLoad === "reset" && (
          <PasswordReset
            handleOnchange={handleOnchange}
            handleOnSubmit={handleOnSubmit}
            handleOnReset={handleOnReset}
            formSwitcher={formSwitcher}
            email={email}
          />
        )}
      </Jumbotron>
    </div>
  );
};

export default EntryPage;
