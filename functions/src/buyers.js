
import { ObjectId } from "mongodb";
import { buyersCollection } from "./config.js"

//get
export async function getAllBuyers(req, res) {
  const allBuyers = await buyersCollection.find({}).toArray()
    .catch(err => {
      res.status(500).send(err);
      return
    })
  // send back the list you just got
  res.send(allBuyers);
}

//post
export async function addBuyer(req, res) {
  const newBuyer = req.body;
  await buyersCollection.insertOne(newBuyer)
    .catch(err => {
      res.status(500).send(err)
      return
    });
  res.status(201).send({ message: "New Buyer has been added" });
}

//post log in

export async function loginBuyer(req, res) {
  try {
    const { email, password } = req.body;
    const filter = { email: email, password: password }
    const buyer = await buyersCollection.findOne(filter);
    res.status(200).send({buyer:buyer})
    //i am getting this
    //{"buyer":{"_id":"64055608287c08b812e2bd14","companyName":"Bootcamps Miami","contactName":"Martin Perez","password":"12345","email":"martin@perez.com","phone_number":"2343453434","city":"Miami","zip":"33423","leads_required":"local"}}
    // bad password {"buyer":null}
  }
  catch (err) {
    res.status(500).send({message: err})
  }




}

//get buyers by leads requested
export async function getBuyersByRequest(req, res) {
  const { type } = req.params;
  console.log(req.params)
  let filter = type != "undefined" ? { leads_required: type } : {}
  console.log(filter)

  const byRequestBuyers = await buyersCollection.find(filter).toArray()
    .catch(err => {
      res.status(500).send(err);
      return
    });
  res.send(byRequestBuyers);

}