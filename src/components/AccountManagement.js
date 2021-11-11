import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { Form, Button, Table } from "react-bootstrap";

const AccountManagement = ({ id }) => {
  const [currentData, setCurrentData] = useState();
  const [contRon, setContRon] = useState();
  const [contEuro, setContEuro] = useState();
  const [dataFetched, setData] = useState(false);
  const [sumaRetragere, setSumaRetragere] = useState();

  const fetchData = async () => {
    const result = await axios.get(
      " http://localhost:8080/client/getdata/" + id
    );
    console.log(result);

    setCurrentData(result);

    setData(true);
  };

  const handleSubmitDepunereRon = async (e) => {
    e.preventDefault();
    const res = await axios.put(
      "http://localhost:8080/client/depunere/contron/" +
        id +
        "?sumaDepunere=" +
        contRon
    );
    setContRon(res.data.cont_RON);
    console.log(res);
  };
  const handleSumbitDepunereEuro = async (e) => {
    e.preventDefault();
    const res = await axios.put(
      "http://localhost:8080/client/depunere/conteuro/" +
        id +
        "?sumaDepunere=" +
        contEuro
    );
    setContEuro(res.data.cont_EURO);
    console.log(res);
  };

  const handleContRonChange = (e) => {
    setContRon(e.target.value);
  };
  const hanldeContEuroChange = (e) => {
    setContEuro(e.target.value);
  };

  const handleChangeRetragereRon = (e) => {
    setSumaRetragere(e.target.value);
  };

  const handleSubmitRetragereRon = async (e) => {
    const res = await axios.put(
      "http://localhost:8080/client/retragere/contron/" +
        id +
        "?sumaRetragere=" +
        sumaRetragere
    );
    console.log(res);
  };

  const handleSubmitRetragereEuro = async (e) => {
    const res = await axios.put(
      "http://localhost:8080/client/retragere/conteuro/" +
        id +
        "?sumaRetragere=" +
        sumaRetragere
    );
    console.log(res);
  };

  if (dataFetched) {
    return (
      <div className="app-container">
        <Table>
          <thead>
            <tr>
              <th>CONT_RON</th>
              <th>CONT_EURO</th>
              <th>CNP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{currentData.data.cont_RON}</td>
              <td>{currentData.data.cont_EURO}</td>
              <td>{currentData.data.cnp}</td>
            </tr>
          </tbody>
        </Table>

        {/* {DEPUNERE} */}
        <div div style={{ margin: "10px" }}>
          <p>Depunere cont ron</p>
          <Form onSubmit={handleSubmitDepunereRon}>
            <Form.Group className="mb-3" style={{ maxWidth: "300px" }}>
              <Form.Label>Introduceti suma dorita</Form.Label>
              <Form.Control
                type="text"
                placeholder="SUMA DEPUNERE"
                onChange={handleContRonChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Depune in contul ron
            </Button>
          </Form>
        </div>
        <div style={{ margin: "10px" }}>
          <p>Depunere cont euro</p>
          <Form onSubmit={handleSumbitDepunereEuro}>
            <Form.Group className="mb-3" style={{ maxWidth: "300px" }}>
              <Form.Label>Introduceti suma dorita</Form.Label>
              <Form.Control
                type="text"
                placeholder="SUMA DEPUNERE"
                onChange={hanldeContEuroChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Depune in contul euro
            </Button>
          </Form>
        </div>

        {/* {RETRAGERE} */}
        <div style={{ margin: "10px" }}>
          <p>Retragere cont ron</p>
          <Form onSubmit={handleSubmitRetragereRon}>
            <Form.Group className="mb-3" style={{ maxWidth: "300px" }}>
              <Form.Label>Introduceti suma dorita</Form.Label>
              <Form.Control
                type="text"
                placeholder="SUMA RETRAGERE"
                onChange={handleChangeRetragereRon}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Retrage din contul RON
            </Button>
          </Form>
        </div>

        <div style={{ margin: "10px" }}>
          <p>Retragere cont euro</p>
          <Form onSubmit={handleSubmitRetragereRon}>
            <Form.Group className="mb-3" style={{ maxWidth: "300px" }}>
              <Form.Label>Introduceti suma dorita</Form.Label>
              <Form.Control
                type="text"
                placeholder="SUMA RETRAGERE"
                onChange={handleSubmitRetragereEuro}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Retrage din contul EURO
            </Button>
          </Form>
        </div>
      </div>
    );
  }

  const deleteAccount = () => {
    axios.delete("http://localhost:8080/client/deleteAccount/" + id);
    localStorage.removeItem("client");
  };

  return (
    <div>
      <div style={{ margin: "20px" }}>
        <h4>Get your account details</h4>
        <Button onClick={fetchData}>Get data</Button>
      </div>
      <div style={{ margin: "20px" }}>
        <h4>Delete Accounnt</h4>
        <Button onClick={deleteAccount}>Delete your account</Button>
      </div>
    </div>
  );
};

export default AccountManagement;
