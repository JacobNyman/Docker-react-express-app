const express = require("express");

const mongoose = require("mongoose");
const cors = require("cors");

const dbconfig = require("./DBconfig");
const todos = require("./routes/todos");

const app = express();

app.use(cors());

// For body parsing
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello World"));

mongoose
  .connect(
    process.env.NODE_ENV === "production"
      ? dbconfig.mongoURIProd
      : dbconfig.mongoURI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connect to MongoDB..."))
  .catch((e) => console.log(e));

app.use("/todos", todos);

app.listen(PORT, () => console.log(`Listening to http://localhost:${PORT}`));
