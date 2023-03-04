import functions from "firebase-functions";
import express from "express";
import cors from "cors"
import {getAllLeads, addLead, getLeadsByLocation} from "./src/api.js"

const app = express();
app.use (cors());

app.get("/test", (req,res)=>{
    res.send("The leads api es connected");
});

app.get("/leads", await getAllLeads)
app.post ("/leads", addLead)
app.get("/leads/:type", getLeadsByLocation)



export const api= functions.https.onRequest(app)