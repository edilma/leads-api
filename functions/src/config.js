import dbConnect from "./utils.js"
 
const db = dbConnect();

//Collection for the leads
export const leadsCollection = db.collection("leads")
//Collection buyers
export const buyersCollection = db.collection("buyers")

