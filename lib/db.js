import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb://duong:<password></password>@cluster0-shard-00-00.gefxl.mongodb.net:27017,cluster0-shard-00-01.gefxl.mongodb.net:27017,cluster0-shard-00-02.gefxl.mongodb.net:27017/auth-demo?ssl=true&replicaSet=atlas-j9qnf3-shard-0&authSource=admin&retryWrites=true&w=majority"
  );
  return client;
}
