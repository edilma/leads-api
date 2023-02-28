
import {MongoClient} from "mongodb"
import { uri } from "./secrets.js";

//connect to the mongo database ldsdatabase
export default function dbConnect() {
  const client = new MongoClient(uri);
  return client.db("ldsdatabase");
}



