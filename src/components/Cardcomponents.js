import React from "react";
import { Card, Col, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import Typography from '@material-ui/core/Typography';
import { Redirect } from "react-router-dom";
import history from './../history';
import { Login } from "./Login";


export const Cardcomponents = (props) => {
  
  const redirectbutton = () => {
      return <Redirect to="./login.html"/>
  }
  
  return (
  
    <Card className="CardGroup">
  <Card.Header></Card.Header>
  <Card.Body>
    <Card.Title>{props.heading}</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary"  onClick={window.location.href="./Login"}>Go somewhere</Button>
  </Card.Body>
</Card>



    


  );
};
