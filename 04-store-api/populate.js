require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/product");

const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    // delete whatever data in there
    await Product.deleteMany();

    // after the deletion, use the data on product json have as the starter
    await Product.create(jsonProducts);
    console.log("Success!!!!");

    // exit the process once the process success.
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
