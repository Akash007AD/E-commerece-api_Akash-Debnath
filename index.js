const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const UserRoute = require("./routes/User_route");
const AuthRoute = require("./routes/Authantication");
const ProductRoute = require("./routes/Product_route");
const CartRoute = require("./routes/Cart_route");
const OrderRoute = require("./routes/Order_route");
const port = 5000;

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  // mongoose.connect(""mongodb+srv://Akash:eeR4HNfoSXPThb98@cluster0.7dc2ucu.mongodb.net/User_Database"")
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.use(express.json());

app.use("/api/auth", AuthRoute);
app.use("/api/user", UserRoute);
app.use("/api/product", ProductRoute);
app.use("/api/Cart", CartRoute);
app.use("/api/Order", OrderRoute);

app.listen(port, () => {
  console.log(`Server started at Port: ${port}`);
});
