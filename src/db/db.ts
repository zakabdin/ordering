import mongoose from "mongoose";


export class DB {
  private uri = "mongodb://ordering-mongodb:27017/Ordering:27017";
  private mongoose;

  constructor() {
    this.mongoose = mongoose;
  }

  async init() {
    try {
      await mongoose.connect(this.uri);
      console.log('The database is connected...')
    } catch (e) {
      console.log('Unable to connect to database...')
    }
  }
}

export default new DB()