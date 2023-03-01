
import dbConnect from "./utils.js"

//This is my connection to the database.  Collection leads
const db = dbConnect();
const leadsCollection = db.collection("leads")


const lead1={
    id:	1,
first_name:	"Willey",
last_name:	"Kigelman",
email:	"wkigelman0@csmonitor.com",
zip: "33486",	
city:	"Stockholm",
learning_preferred:	"Remote",
ip_address:	"104.84.132.14",
time_acquired:	"2/7/23",
site_collected:	"google.com",
time:	"7:21 PM"
}

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
export async function addlead (req,res){
  const newLead = req.body;
  await leadsCollection.insertOne(newLead)
  .catch(err=>{
    res.status(500).send(err)
    return
  });
  res.status(201).send({message: "A new lead has been added"});
}