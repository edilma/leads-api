
import {leadsCollection} from "./config.js"

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
  try {
    const status =  await leadsCollection.insertOne(newLead)
    res.status(201).send({message: "A new lead has been added"});
    
  } catch (error) {
    res.status(500).send(err)
    console.error(error)
  }
}

//get leads by location
export async function getLeadsByLocation (req,res){
  const {type} = req.params;
  console.log(req.params)
let filter = type!= "undefined" ? {learning_option: type} : {}
console.log(filter)
//this is sending the leads by location, remote or local
  const byLocationLeads = await leadsCollection.find(filter).toArray() 
  .catch(err=>{
    res.status(500).send(err);
    return
  });
  res.send(byLocationLeads);
  
}