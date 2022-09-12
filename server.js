import express from "express";

const app = express();
const port = 9384;

const employees = [
  {
    firstname: "John",
    lastname: "Smith",
    department: "HR",
    age: 25,
  },
  { firstname: "Adam", lastname: "Smith", department: "IT", age: 27 },
];

app.get("/", (req, res) => {
  res.json(employees);
});

app.listen(port, () => {
  console.log(`listening on PORT ${port}`);
});