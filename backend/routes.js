"use strict";
const express = require("express");
const routes = express.Router();
const pool = require("./connection");

routes.get("/employees", (req, res) => {
  let query = `SELECT * FROM employees`;
  pool.query(query).then((response) => {
    res.json(response.rows);
  });
});

routes.get("/employees", (req, res) => {
  let query = `SELECT * FROM employees`;
  pool.query(query).then((response) => {
    res.json(response.rows);
  });
});

routes.get("/employees", (req, res) => {
  let query = `select * from employees where id = ${req.query.id}`;
  pool.query(query).then((response) => {
    res.json(response.rows);
  });
});

routes.post("/employees", (req, res) => {
  let query = `INSERT INTO employees (name, skill, exp, address) VALUES ($1, $2, $3, $4)`;
  pool
    .query(query, [
      req.body.name,
      req.body.skill,
      req.body.exp,
      req.body.address,
    ])
    .then((response) => {
      res.status(201);
      res.json(req.body);
    });
});

module.exports = routes;
