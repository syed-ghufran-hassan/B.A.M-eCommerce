import express from "express"
import mongoose from "mongoose";
import cors from "cors";
import products from './routes/products.js';
import users from './routes/users.js';
import contact from './routes/contact.js';
// import dotenv from "dotenv"

const app = express();

// dotenv.config()

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));

app.use(cors());

app.get("/", (req,res) => {
  res.send("Hello World")
})
app.use("/products", products);
app.use("/users", users);
app.use("/contact", contact);

// Function to serve all static files
// inside public directory.
app.use(express.static('public'));  
app.use('/images', express.static('images')); 

const CONNECTION_URL = "mongodb+srv://bam_user:bamenter1234@cluster0.ejkoy.mongodb.net/bam-project?retryWrites=true&w=majority"


const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log(`Server running on Port: http://localhost:${PORT}`)))
  .catch(error => console.log(`${error} did not connect`));
