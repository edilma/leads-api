import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { getAllLeads, addLead, getLeadsByLocation } from "./src/leads.js";
import {
  getAllBuyers,
  addBuyer,
  getBuyersByRequest,
  loginBuyer,
} from "./src/buyers.js";

const app = express();
app.use(cors());

app.get("/test", (req, res) => {
  res.send("The leads api es connected");
});
//API points for leads
app.get("/leads", await getAllLeads);
app.post("/leads", addLead);
app.get("/leads/:type", getLeadsByLocation);

//API points for buyers
app.get("/buyers", await getAllBuyers);
app.post("/buyers", addBuyer);
app.post("/login", loginBuyer);

//the get buyers by location needs to be modify
app.get("/buyers/:type", getBuyersByRequest);

export const api = functions.https.onRequest(app);
