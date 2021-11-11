import React, {useState} from "react"
import axios from "axios"
import "bootstrap/dist/css/bootstrap.css";
import { Form,Button} from "react-bootstrap";

const Register = () => {

    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [nume,setNume] = useState(null);
    const [prenume,setPrenume] = useState(null);
    const [cnp,setCNP] = useState(null);



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("acii")
        axios.post("http://localhost:8080/client/register", { email, password,nume,prenume,cnp})
      .then(response => {
          console.log(JSON.stringify(response.data));
          window.location.reload(false);
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }
    
    const handleEmailChange = (e) => {
      
        setEmail(e.target.value);

    }
    
     const handleCNPChange = (e) => {
      
        setCNP(e.target.value);

    }

    const handlePrenumeChange = (e) => {
      
        setPrenume(e.target.value);

    }

       const handleNumeChange = (e) => {
      
        setNume(e.target.value);

    }
    

    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className="app-container">
            
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"  onChange={handleEmailChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Nume</Form.Label>
            <Form.Control type="text" placeholder="Nume" onChange={handleNumeChange} />
        </Form.Group>

        
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Prenume</Form.Label>
            <Form.Control type="text" placeholder="Prenume" onChange={handlePrenumeChange} />
        </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>CNP</Form.Label>
            <Form.Control type="text" placeholder="Cod numeric personal" onChange={handleCNPChange} />
        </Form.Group>

        <Button variant="primary" type="submit" >
            Submit
        </Button>
        </Form>

        </div>
    )


}

export default Register;

