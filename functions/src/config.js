import dbConnect from "./utils.js"

//This is my connection to the database.  
const db = dbConnect();

//Collection leads
export const leadsCollection = db.collection("leads")
//Collection buyers
export const buyersCollection = db.collection("buyers")

