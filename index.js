import express from "express";
import bodyparser from "body-parser";

const app = express();

//used for parsing the request body for post, put requests
app.use(bodyparser.json());
app.get("/", (req, res) => {
  res.send("Hello World!I'm Nahid");
  console.log(req);
});

app.post("/api/v1/users", (req, res) => {
  const { name, company } = req.body;
  console.log(name, company);
  res.send("alhamdulillah");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
