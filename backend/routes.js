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

// routes.get("/employees", (req, res) => {
//   let query = `SELECT * FROM employees`;
//   pool.query(query).then((response) => {
//     res.json(response.rows);
//   });
// });

routes.get("/employees/skill", (req, res) => {
  let query = `select * from employees where skill = '${req.query.keyword}'`;
  pool.query(query).then((response) => {
    res.json(response.rows);
  });
});

routes.get("/employees/name", (req, res) => {
  let query = `select * from employees where name = '${req.query.keyword}'`;
  pool.query(query).then((response) => {
    res.json(response.rows);
  });
});

routes.get("/employees/id", (req, res) => {
  let query = `select * from employees where id = ${req.query.keyword}`;
  pool.query(query).then((response) => {
    res.json(response.rows);
  });
});

routes.get("/employees/exp", (req, res) => {
  let query = `select * from employees where exp >= ${req.query.keyword}`;
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
