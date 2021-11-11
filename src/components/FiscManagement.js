import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { Form, Button, Table } from "react-bootstrap";

const FiscManagement = () => {
  const [fiscData, setFiscData] = useState([]);
  const [newClient, setNewClient] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "http://localhost:8080/fisc/getclientsdata"
      );
      console.log(result);
      setFiscData(result.data);
    };
    fetchData();
  }, []);

  const handleClientAdd = (e) => {
    setNewClient(e.target.value);
  };

  const handleAddClient = async (e) => {
    e.preventDefault();
    const result = await axios.post(
      "http://localhost:8080/fisc/addclientmonitorizat?idClient=" + newClient
    );

    window.location.reload(false);
  };

  const handleDeleteClient = async (e) => {
    const result = await axios.delete(
      "http://localhost:8080/fisc/deleteclient?idClient=" + newClient
    );
    window.location.reload(false);
  };

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nume</th>
            <th>Prenume</th>
            <th>CNP</th>
            <th>CONT_RON</th>
            <th>CONT_EURO</th>
          </tr>
        </thead>
        <tbody>
          {fiscData.map((element) => {
            return (
              <tr>
                <td>{element.id}</td>
                <td>{element.nume}</td>
                <td>{element.prenume}</td>
                <td>{element.cnp}</td>
                <td>{element.cont_RON}</td>
                <td>{element.cont_EURO}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Form onSubmit={handleAddClient}>
        <Form.Group className="mb-3" style={{ maxWidth: "300px" }}>
          <Form.Label>Introduceti ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Id-ul clientului monitorizat"
            onChange={handleClientAdd}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Adauga client monitorizat
        </Button>
      </Form>

      <Form onSubmit={handleDeleteClient}>
        <Form.Group className="mb-3" style={{ maxWidth: "300px" }}>
          <Form.Label>Introduceti ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Id-ul clientului monitorizat"
            onChange={handleClientAdd}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sterge client monitorizat
        </Button>
      </Form>
    </div>
  );
};

export default FiscManagement;
