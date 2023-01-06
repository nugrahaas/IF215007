// const {express} =  require("express");
// const {mongoose} =  require("mongoose");
// const {user} =  require("view/user.js");
// const {cors} =  require("cors");

// const app = express();

// const db =
//   "mongodb+srv://user:user@cluster0.xkbq7qj.mongodb.net/?retryWrites=true&w=majority";

// app.use(cors());
// app.use(express.json());

// app.use("/api/user", user);
// mongoose
//   .connect(db)
//   .then(() => app.listen(5000))
//   .then(() =>
//     console.log("connected to database and listening to localhost:5000")
//   )
//   .catch((err) => console.log(err));

import { mysql } from '../node_modules/mysql';

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "newsletter-for-botyol"
});

export default con;