import React from "react";
import { Card, Col, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import Typography from "@material-ui/core/Typography";
import { Navigate } from "react-router-dom";
import history from "./../history";
import { Link,NavLink,NavLinkProps } from "react-router-dom";
import { Login } from "./Login/Login";
import { Component } from "react";


export const Cardcomponents = (props) => {

  const redirectbutton = () => {
      return <Link to="./Login/Login"/>
  }

  return (

    <Card className="CardGroup">
  <Card.Header></Card.Header>
  <Card.Body>
    <Card.Title>{props.heading}</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Link  to="./Login"><Button type="button" variant="primary"  >Go somewhere</Button></Link>
    
  </Card.Body>
</Card>

  );
};
