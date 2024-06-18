const fs = require("fs");
const util = require("util");
const axios = require("axios");

const interfacesJson = JSON.parse(
  fs.readFileSync("../src/schemas/interface.json", "utf8")
);
const generalJson = JSON.parse(
  fs.readFileSync("../src/schemas/interface.json", "utf8")
);
const vlanJson = JSON.parse(
  fs.readFileSync("../src/schemas/interface.json", "utf8")
);


const pushToDB = async () => {
  try {
    const host = "http://localhost:3000/api/templates";

    await axios.post(host, interfacesJson);
    console.log("Interfaces configuration has been sent.");

    await axios.post(host, generalJson);
    console.log("General configuration has been sent.");

    await axios.post(host, vlanJson);
    console.log("VLAN configuration has been sent.");
  } catch (error) {
    console.error("Error sending data");
    console.error((error as Error).stack);
  }
};

pushToDB();

