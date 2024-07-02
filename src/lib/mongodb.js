import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB;

if (!MONGODB_URL) {
  throw new Error("MONGODB_URL não definido");
}

let mongo = global.mongoose;

if (!mongo) {
  mongo = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (mongo.conn) {
    console.log("Cached Mongo");
    return mongo.conn;
  }

  if (!mongo.promise) {
    const opts = {};

    mongo.promise = mongoose.connect(MONGODB_URL, opts).then((mongoose) => {
      return mongoose;
    });
  }
  mongo.conn = await mongo.promise;
  return mongo.conn;
}

export default dbConnect;
