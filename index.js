const { Router } = require("express");
const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT || 3000;
const router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//------------------------------------------------\\

const tableReservationsData = [
  {
    name: "harry",
    email: "harry@gmail.com",
    phone: "0989879878",
    id: "1223",
  },
];

const waitingListData = [

];

//----------------------------------------------------\\

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tableData", function (req, res) {
  console.log(
    "I am the number of table reservations:",
    tableReservationsData.length
  );
  return res.json(tableReservationsData);
});

app.get("/api/waitingData", function (req, res) {
  console.log(
    "I am the number of table reservations:",
    waitingListData.length
  );
  return res.json(waitingListData);
});

//-----------------------------------------------\\
app.post("/api/tableData", function (req, res) {
  const newReservation = req.body;
  console.log(newReservation);

  if (tableReservationsData.length >= 5) {
    waitingListData.push(newReservation);
    res.send(false);
  } else {
    tableReservationsData.push(newReservation);
    res.send(true);
  }
});

//----------------------------------\\

app.listen(port, function () {
  console.log("App listening on PORT " + port);
});
