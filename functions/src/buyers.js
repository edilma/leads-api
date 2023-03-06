
import {buyersCollection} from "./config.js"

//get
export async function getAllBuyers (req,res){
     const allBuyers= await buyersCollection.find({}).toArray()
      .catch(err=>{
        res.status(500).send(err);
        return
      })
  // send back the list you just got
  res.send(allBuyers);
}

//post
export async function addBuyer (req,res){
  const newBuyer = req.body;
  await buyersCollection.insertOne(newBuyer)
  .catch(err=>{
    res.status(500).send(err)
    return
  });
  res.status(201).send({message: "A new Buyer has been added"});
}

//get buyers by leads requested
export async function getBuyersByRequest (req,res){
  const {type} = req.params;
  console.log(req.params)
let filter = type!= "undefined" ? {leads_required: type} : {}
console.log(filter)

  const byRequestBuyers = await buyersCollection.find(filter).toArray() 
  .catch(err=>{
    res.status(500).send(err);
    return
  });
  res.send(byRequestBuyers);
  
}