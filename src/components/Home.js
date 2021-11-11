import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { Form, Button, Table } from "react-bootstrap";
import AccountManagement from "./AccountManagement";
import FiscManagement from "./FiscManagement";

const Home = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [fiscAccount, setFiscAccount] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/client/login", { email, password })
      .then((response) => {
        console.log(JSON.stringify(response.data));
        if (response.data === "FISC") {
          localStorage.setItem("fisc", JSON.stringify(response.data));
        } else {
          localStorage.setItem("client", JSON.stringify(response.data));
        }
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  if (localStorage.getItem("client") != null) {
    return (
      <AccountManagement
        id={JSON.parse(localStorage.getItem("client")).id}
      ></AccountManagement>
    );
  }

  if (localStorage.getItem("fisc") != null) {
    return <FiscManagement></FiscManagement>;
  }
  return (
    <div className="app-container">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleEmailChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Home;
