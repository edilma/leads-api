import functions from "firebase-functions";
import express from "express";
import cors from "cors"

const app = express();
app.use (cors());

app.get("/test", (req,res)=>{
    res.send("The leads api es connected");
});

app.post("/leads", getAllLeads)
//app.post ("/leads", addlead)
//app.get("/leads/:location", getLeadsByLocation)



// should i have next 2 api points?
//app.get ("/leads/local", getLocalLeads)
//app.get("/leads/remote", getRemoteLeads)


export const api= functions.https.onRequest(app)