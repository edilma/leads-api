
import dbConnect from "./utils.js"

//This is my connection to the database.  Collection leads
const db = dbConnect();
const leadsCollection = db.collection("leads")

//get
export async function getAllLeads (req,res){
     const allLeads= await leadsCollection.find({}).toArray()
      .catch(err=>{
        res.status(500).send(err);
        return
      })
  // send back the list you just got
  res.send(allLeads);
}

//post
export async function addLead (req,res){
  const newLead = req.body;
  await leadsCollection.insertOne(newLead)
  .catch(err=>{
    res.status(500).send(err)
    return
  });
  res.status(201).send({message: "A new lead has been added"});
}

//get leads by location
export async function getLeadsByLocation (req,res){
  const {type} = req.params;
  console.log(req.params)
let filter = type!= "undefined" ? {learning_preferred : type} : {}
console.log(filter)

  const localLeads = await leadsCollection.find(filter).toArray() 
  .catch(err=>{
    res.status(500).send(err);
    return
  });
  res.send(localLeads);
  
}