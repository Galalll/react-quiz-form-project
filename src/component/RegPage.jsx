import React, { Component, useEffect, useState, useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setUserName,
  setEmail,
  setResult,
  Review,
  setIsLoged,
} from "../redex/slices/quiz";
function RegPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Namechanger = (event) => {
    dispatch(setUserName(event.target.value));
  };
  const Emailchanger = (event) => {
    dispatch(setEmail(event.target.value));
  };
  useEffect(() => {}, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Card
        style={{
          width: "35rem",
          backgroundColor: "#f0f8ff",
        }}
      >
        <Card.Body
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(setIsLoged(true));
            navigate("/");
          }}
        >
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Enter Your Name"
                onChange={(e) => {
                  Namechanger(e);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  Emailchanger(e);
                }}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default RegPage;
