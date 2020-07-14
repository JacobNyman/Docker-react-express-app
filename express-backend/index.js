const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const dbconfig = require("./DBconfig");
const todos = require("./routes/todos");

const app = express();

app.use(cors());

// For body parsing
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello World"));
console.log(
  path.resolve(__dirname, "..", "practice-app", "build", "index.html")
);
mongoose
  .connect(
    // process.env.NODE_ENV === "production"
    //   ? dbconfig.mongoURIProd
    //   : dbconfig.mongoURI,
    dbconfig.mongoURIProd,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connect to MongoDB..."))
  .catch((e) => console.log(e));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("../practice-app/build"));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "..", "practice-app", "build", "index.html")
    );
  });
}

app.use("/todos", todos);

app.listen(PORT, () => console.log(`Listening to http://localhost:${PORT}`));
