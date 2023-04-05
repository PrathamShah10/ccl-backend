const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5003;
// Middlewares
app.use(express.json());
app.use(cors({
  origin:"*",
}));
app.use("/books", router); // localhost:5000/books

mongoose
  .connect(
    "mongodb+srv://ccl:root123@cluster0.ykfgowb.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000 || process.env.PORT);
  })
  .catch((err) => console.log(err));
  app.listen(PORT,()=> {
    console.log('server is running on',PORT);
})